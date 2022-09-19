const express = require('express');
const { emptyQuery } = require('pg-protocol/dist/messages');
const app = express();
const cors = require('cors');
const port = 5837;
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || 'development']);
const { createData } = require('./controllers.js')

app.use(cors());
app.options('*', cors());
app.use(express.json())
//  .whereRaw('?? = ??', ['a.column_1', 'b.column_2'])
app.get('/', (req, res) => {
    res.status(200).send("This is how to use our API: INSERT API USE HERE")
})

app.get('/military_base', (req, res) => {
    const value = req.query
    if (value.branch != undefined) {
        knex
            .select('*')
            .from('military_base')
            .where('branch', '=', value.branch)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
        //localhost:5000/military_base?branch=USAF
        // where('x' '>' "y")
    } else {
        knex
            .select('*')
            .from('military_base')
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
    }
})
app.post('/military_base', (req, res) => {
    if (req.body.branch != undefined && req.body.location != undefined) {
        knex.select('location')
            .from('military_base')
            .where("location", '=', req.body.location)
            .then(data => {
                if (data.length > 0) {
                    res.status(404).send("ERROR: Entry already exists within database")
                } else {
                    knex('military_base').insert({
                        location: req.body.location,
                        branch: req.body.branch
                    })
                        .then(() => {
                            res.status(201).send("Entry into military_branch created successfully");
                        })
                }
            })

    } else {
        res.status(404).send('ERROR, you have not input all properties, please input in the following manner: {"location": "LOCATIONNAME", "branch": "BRANCHNAME"')
    }
})
app.patch('/military_base', (req, res) => {
    if (req.body.branch != undefined && req.body.location != undefined) {
        knex('military_base')
            .where({ location: req.body.location })
            .update({ ...req.body })
            .select('*')
            .from('military_base')
            .then((data) => res.status(200).send('Entry updated successfully'))

    } else {
        res.status(404).send('No previous entry found to be updated.')
    }
})
app.delete('/military_base', (req, res) => {
    if (req.body.branch != undefined && req.body.location != undefined) {
        knex('military_base')
            .where({ location: req.body.location })
            .delete()
            .select('*')
            .from('military_base')
            .then(data => res.status(200).send('Entry removed successfully'))
    } else {
        res.status(404).send('Error: entry could not be found')
    }
})

app.get('/dfac_name', (req, res) => {
    const value = req.query;
    if (value.location != undefined) {
        knex
            .select('*')
            .from('dfac_name')
            .where('location', '=', value.location)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
        //select by military base ID
        //localhost:8081/dfac_names?location=xyz
        //localhost:8081/military_bases?branch=USAF/dfac_names
    } else {
        knex
            .select('*')
            .from('dfac_name')
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
        //return all dfacs
    }
})

app.post('/dfac_name', (req, res) => {
    if ((req.body.name != undefined) && (req.body.location != undefined)) {
        knex.select('location').from('military_base').where('location', '=', req.body.location).then(
            data => {
                if (data.length == 0) {
                    res.status(404).send("ERROR: Location does not exist inside of military_base database")
                } else {
                    knex
                        .select('name')
                        .from('dfac_name')
                        .where('name', '=', req.body.name)
                        .then(data => {
                            if (data.length > 0) {
                                res.status(404).send("ERROR: Entry already exists");
                            } else {
                                knex('dfac_name').insert({
                                    name: req.body.name,
                                    location: req.body.location
                                })
                                    .then(() => {
                                        res.status(201).send("Entry into dfac_name database created successfully");
                                    })
                            }
                        })
                }
            }
        )
    } else {
        res.status(404).send('ERROR: Provided too few values, please input data as follows. {"name":"INSERTNAME", "location":"INSERTLOCATION"')
    }
})

app.patch('/dfac_name/:id', (req, res) => {
    // let {id} = req.params.id
    if (req.body.name != undefined && req.body.location != undefined) {
        knex('dfac_name')
            .where({ id: req.params.id })
            .update({ ...req.body })
            .select('*')
            .from('dfac_name')
            .then((data) => res.status(200).send('Entry updated successfully'))


    } else {
        res.status(404).send('No previous entry found to be updated.')
    }
})



//    let {id} = req.params.id;
//    let { name, location} = req.body
//     // const {id} = req.params
//     knex('dfac_name')
//     .where({id:id})
//     .update({...req.body})
//     .returning('*')
//     .then(data => res.status(200).send(data))

// })

app.delete('/dfac_name/:id', (req, res) => {
    knex('dfac_name')
        .select('*')
        .where({ id: req.params.id })
        .delete()
        .then(data => res.status(200).send(data))
        .catch((err) => res.status(404).send('Player not found'))
});

app.get('/menu', (req, res) => {
    const value = req.query;
    // /menu?dfacName=Riverside DFAC&timeOfDay=Lunch
    if (value.dfacName != undefined) {
        if (value.timeOfDay != undefined) {
            knex
                .select('*')
                .from('menu')
                .where('DFAC_name', '=', value.dfacName)
                .andWhere('time_of_day', '=', value.timeOfDay)
                .then((data) => {
                    res.status(200).send(data);
                })
                .catch((err) => {
                    res.status(503).send(err);
                })
        } else {
            knex
                .select('*')
                .from('menu')
                .where('DFAC_name', '=', value.dfacName)
                .then((data) => {
                    res.status(200).send(data);
                })
                .catch((err) => {
                    res.status(503).send(err);
                })
        }
    } else {
        knex
            .select('*')
            .from('menu')
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
    }
});



app.get('/detailed_data', (req, res) => {
    const value = req.query;
    if (value.isVegan != undefined) {
        knex
            .select('*')
            .from('detailed_data')
            .where('is_vegan', '=', value.isVegan)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
    }

    else if (value.isVegetarian != undefined) {
        knex
            .select('*')
            .from('detailed_data')
            .where('is_vegetarian', '=', value.isVegetarian)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
    }

    else if (value.isNuts != undefined) {
        knex
            .select('*')
            .from('detailed_data')
            .where('is_nuts', '=', value.isNuts)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })

    }

    else if (value.isDairy != undefined) {
        knex
            .select('*')
            .from('detailed_data')
            .where('is_dairy', '=', value.isDairy)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })

    }

    else if (value.isGluten != undefined) {
        knex
            .select('*')
            .from('detailed_data')
            .where('is_gluten', '=', value.isGluten)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
    }

    else if (value.name != undefined) {
        knex
            .select('*')
            .from('detailed_data')
            .where('name', '=', value.name)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
    } else {
        knex
            .select('*')
            .from('detailed_data')
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
    }
})

app.post('/detailed_data', (req, res) => {
    knex('detailed_data').insert({
        name: req.body.name,
        description: req.body.description,
        is_vegan: req.body.is_vegan,
        is_vegetarian: req.body.is_vegetarian,
        is_dairy: req.body.is_dairy,
        is_nuts: req.body.is_nuts,
        is_gluten: req.body.is_gluten,
        calories: req.body.calories,
        calories_from_fat: req.body.calories_from_fat,
        total_fat: req.body.total_fat,
        saturated_fat: req.body.saturated_fat,
        trans_fat: req.body.trans_fat,
        cholestrol: req.body.cholestrol,
        sodium_total: req.body.sodium_total,
        carbohydrates: req.body.carbohydrates,
        dietary_fiber: req.body.dietary_fiber,
        sugars: req.body.sugar,
        protein: req.body.protein,
    }).then(
        knex('menu')
            .insert(
                {
                    name_of_menu_item: req.body.name,
                    DFAC_name: req.body.DFAC_name,
                    time_of_day: req.body.time_of_day
                }
            ).then(() => {
                res.status(200).send("Entry successfully created");
            })
    )


    // const newData = {
    // knex('detailed_data').insert(newData)
    //     .then(data => res.json(data)) 
    //     .catch((err) => {
    //         res.status(404).json({ err: err, message: "no new data was created, please try again."})
    //     })
})

app.patch('/detailed_data', (req, res) => {

    knex
        .select('*')
        .from('detailed_data')
        .where({ name: req.body.name })
        .update({ description: req.body.description })
        .then(data => {
            if (!data) {
                return res.status(404).send('Entry not found to be updated')
            } else {
                return res.status(200).send('Entry updated successfully')
            }
        }).catch(err => res.status(404).send('ERROR: An error has occurred'))
})

// if (req.body.branch != undefined && req.body.location != undefined){
//     knex('military_base')
//     .where({location: req.body.location})
//     .update({...req.body})
//     .select('*')
//     .from('military_base')
//     .then((data)=> res.status(200).send('Entry updated successfully'))

// } else{
//     res.status(404).send('No previous entry found to be updated.')
// }
app.delete('/', () => {

})


app.listen(port, () => { console.log(`Listening on port ${port}!`) });



// app.post('/books', (req, res) => {
//     console.log(req.body);
//     let { id, title, author, cover, genres, synopsis } = req.body
//     let newBook = {
//         id: books.length + 1,
//         title,
//         author,
//         cover,
//         genres,
//         synopsis
//     }
//     let dummyCSVValues = `\n"${newBook.id}","${newBook.title}","${newBook.author}","${newBook.cover}"`
//     fs.appendFileSync('./dummy.csv', dummyCSVValues, err => {
//         if (err) throw err
//     })
//     let dummyDataBalues = `"id","title","author","genres","synopsis"\n"${newBook.id}","${newBook.title}","${newBook.author}","${newBook.genres}","${newBook.synopsis}"`
//     fs.writeFile(`./data/${newBook.id}.csv`, dummyDataBalues, err => {
//         if (err) throw err
//     })
//     dummyBooks()
//     res.status(201).send(req.body)
// })
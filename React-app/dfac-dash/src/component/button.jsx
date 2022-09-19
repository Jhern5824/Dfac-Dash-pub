

const Button = () => {
    const [filterTime, setFilterTime] = useState('')

    useEffect(()=> {
        const newFilterTime = menuItem.filter(item =>{
            return item.timeofday.includes(dinner)


        })
        setMenuItem(newFilterTime);
    })
}


//menuItem.filter(item => item.timeofday ==='lunch')

{menuItem.map(individualMenu => {
    return(
 <FoodItem menu={individualMenu} />
)}
)}

const lunchFilter()
import { Card } from "./UI/Card"
import FetchAllItems from "./fetchItems"
import NavBar from "./UI/Navbar"
import { useState } from "react"

export const CategoriesPage = () => {
    const { items, error, loading } = FetchAllItems()
    const [selectedCategory, setSelectedCategory] = useState(null)

    if (error) {
    return <div>{error}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }
    console.log(items)

    const listofCategories = findCategories(items)

    function handleCategoryClick(category) {
        const filteredItems = items.filter((item) => item.category === category)
        setSelectedCategory(filteredItems)
    }


    return (
        <div>
        <NavBar />
        <div className="container mx-auto">
            <h1 className="mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1 bg-gray-100 p-4">
                <h2 className="text-xl font-bold mb-2">Categories</h2>
                <div>
                    <button onClick={() => setSelectedCategory(null)}>All</button>
                    {listofCategories.map((category) => (
                        <div key={category}>
                            <button key={category} onClick={() => handleCategoryClick(category)}>{category}</button>
                            <br />
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="md:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    { selectedCategory == null ?
                        items.map((item) => (
                        <Card key={item.id} item={item} />
                        )) :
                        selectedCategory.map((item) => (
                        <Card key={item.id} item={item} />
                        ))
                    }
                
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}


function findCategories(items) {
    const categories = items.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    }, [])

    return categories
}

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />

          ))
        }
      </ol>
    </>
  )
}

// Debemos mostrar siempre los elementos utilizando su key
// no podemos mutar la información con push
import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

const defaultEndpoint = 'https://rickandmortyapi.com/api/character/';

export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

export default function Home({ data }) {
  const { results = []} = data;

  function handleOnSubmitSearch(e) {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find(field => field.name === 'query');

    const value = fieldQuery.value || '';
    const endpoint = 'https://rickandmortyapi.com/api/character/?name=${value}';

    updatePage({
      current: endpoint
    });

  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Characters</title>
      </Head>
      <Navbar/>
      <br></br>
      
      <div className='mt-64 text-center grid grid-cols-3 gap-2'> 
      <input name="query" type="search" className='search col-span-3 border-gray-900 border-2 bg-gradient-to-r from-red-400 via-purple-300 to-purple-500 w-50 h-8 text-xl text-white font-light pl-2' onSubmit={handleOnSubmitSearch}></input>
      <button className='border-2 col-start-2 w-28 h-8 border-black hover:bg-purple-500 hover:text-white hover:border-red-400'>Hit Me</button>
      </div>

      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-h-screen pt-14 '>
        {results.map( ({id, name, image, gender }) => {
          return ( 
          <li key={id} className='h-40 w-60 mb-28 cursor-pointer hover:underline'>
            <img className='rounded-2xl border-gray-900 border-4' src={image} alt={`${name} Thumb`} />
          <div className='grid grid-cols-1'>
          <h3 className='text-left text-lg mt-1 text-transparent bg-clip-text font-bold bg-gradient-to-br from-red-800 via-purple-300 to-purple-500'>{name}</h3>
          <h3 className='text-left text-lg font-light text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-300 to-red-800'>{gender}</h3>
          </div>
        </li>
          )
        })}
      </ul>

      <Footer/>

      
      
    </div>
  )
}

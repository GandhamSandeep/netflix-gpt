import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.language);

  return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" className='w-1/2 border border-white grid grid-cols-12 bg-black/70 text-white'>
            <input type="text" className='p-4 m-4 col-span-9 rounded-xl bg-gray-800' placeholder={lang[langKey]?.gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-500 text-white font-semibold rounded-md col-span-3 cursor-pointer'>
                {
                    lang[langKey]?.search
                }
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;
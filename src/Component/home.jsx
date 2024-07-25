import { Theme, Button } from 'react-daisyui'
const Home = () => {
    return ( 

    <div className="bg-indigo-500">
        <h1 className="text-3xl font-bold">
        Cek Kodam Kamu
      </h1>
      

      
        <form>
            <label class="block">
            <span class="block text-lg font-medium text-slate-700">Masukan Nama Kamu</span>
            <input class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
            <p class="mt-2 opacity-50 contrast-more:opacity-100 text-slate-600 text-sm">
            <button class="bg-cyan-500 hover:bg-cyan-600 ...">Submit</button><br />
            Kodam kamu adalah: 
            </p>
        </label>
        </form>
        </div>
     );
}
 
export default Home;
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button, Link } from 'mui-simple';
import './App.css';
import cssModuleOne from './one.module.css';
import cssModuleTwo from './two.module.css';

// dynamic import
const logoName = 'apple';
const module = (await import(`./png-images/${logoName}.png`)) as { default: string };

// dynamic multiple imports (glob is vite feature, eager to prevent async values)
const modules = import.meta.glob<{ default: string }>(`./png-images/*.png`, { eager: true });

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1 className={cssModuleOne.highlight}>Mui-Simple + Vite + React</h1>
            <h3 className={cssModuleTwo.highlight}>starter vite project with vite course features</h3>
            <div className="card">
                <Button variant="contained" startIcon="People" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
            </div>
            <div className="image">
                <img src={module.default} width={150} alt="logoName='apple'" />
            </div>
            <div className="images">
                {Object.values(modules).map((module, i) => (
                    <img key={i} src={module.default} width={75} alt={`png image ${i}`} />
                ))}
            </div>
            <Link url="/another-route/">go to another route</Link>
        </>
    );
}

export default App;

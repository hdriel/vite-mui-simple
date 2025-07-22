import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Typography, Button, Link } from 'mui-simple';
import './App.css';

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
            <Typography component="h1" justifyContent="center" fullWidth size="2em">
                Mui-Simple + Vite + React
            </Typography>
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

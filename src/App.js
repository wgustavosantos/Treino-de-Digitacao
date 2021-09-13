import React from 'react';

const App = () => {
    return (<div className="container">
        <div className="valid-keys">
            <span className="matched">Gus</span>
            <span className="remainder">tavo</span>
        </div>
        <div className="typed-keys">Gusbavp</div>
        <div className="completed-words">
            <ol>
                <li>cidade</li>
                <li>carro</li>
                <li>profissional</li>
                <li>pequeno</li>

            </ol>
        </div>
    </div>
    );
}

export default App;

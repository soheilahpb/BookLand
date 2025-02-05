import ReactDOM from "react-dom/client";
import Tags from './master.jsx'
import DynamicProvider from './pages/context/context.jsx'



// making the context available globally
const x = ReactDOM.createRoot(document.getElementById("root"))
x.render(

    <DynamicProvider>
        <Tags />
    </DynamicProvider>
)
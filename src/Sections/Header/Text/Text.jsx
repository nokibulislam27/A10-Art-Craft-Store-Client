
import { Typewriter } from 'react-simple-typewriter'


const ToggleText = () => {



return (
    <div className='App'>
        <h1 style={{ margin: 'auto 0', fontWeight: 'normal', fontSize:'18px' }}>
            {' '}
            <span style={{ color: 'gray', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={['Speak', 'Throw', 'Art', '&','Craft']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                   
                />
            </span>
        </h1>
    </div>
    )
}
export default ToggleText

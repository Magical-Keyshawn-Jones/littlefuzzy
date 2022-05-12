import './GamingStyles.css'

export function Gaming (props) {
   
    const { words } = props
    
    return (
        <div className='GamingHome'>
            <div className='GamingTitle'>
                <h1>I love Gaming and {words} Yall!!!</h1>
            </div>
        </div>
    )
}

// export default Gaming;
const Wrapper = ({ children }) => {
    // return (<div className="wrapper">
    //     {props.children}
    // </div>)
    return (<div style={{ color: 'red' }}>
        {children}
    </div>)

}

export default Wrapper;
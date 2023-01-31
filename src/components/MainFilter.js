import '../styles/mainfilter.css';

const MainFilter = (props) => {
    let active = {
        backgroundColor: 'rgba(127, 105, 96)'
    };

    return ( 
         <nav className="main-filter-nav">
          <button
            onClick={ () => props.onUpdate('all') }
            style={ props.current === 'all' ? active : undefined }
          >
            All
          </button>
          <button
            onClick={ () => props.onUpdate('pending') }
            style={ props.current === 'pending' ? active : undefined }
          >
            Tasks
          </button>
          <button
            onClick={ () => props.onUpdate('completed') }
            style={ props.current === 'completed' ? active : undefined }
          >
            Done
          </button>
        </nav>
     );
}
 
export default MainFilter;
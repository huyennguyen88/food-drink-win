import React from 'react';
class Pagination extends React.Component {
    render() {
        return (
            <div className="Pagination">
                <nav >
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="abc" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="abc">1</a></li>
                        <li className="page-item"><a className="page-link" href="abc">2</a></li>
                        <li className="page-item"><a className="page-link" href="abc">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="abc" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Pagination;
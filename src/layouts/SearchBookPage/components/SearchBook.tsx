import BookModel from "../../../models/BookModel";

export const SearchBook: React.FC<{ book: BookModel }> = (props) => {
    return (
        <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="d-none d-lg-block">
                        {props.book.img ?
                            <img src={props.book.img} alt="Book"
                                width="123"
                                height="196" />
                            :
                            <img src={require('./../../../Images/BooksImages/book-1000.png')}
                                alt="book"
                                height='233'
                                width='151' />
                        }
                    </div>
                    <div className="d-lg-none d-flex justify-content-center align-items-center">
                        {props.book.img ?
                            <img src={props.book.img} alt="Book"
                                width="123"
                                height="196" />
                            :
                            <img src={require('./../../../Images/BooksImages/book-1000.png')}
                                alt="book"
                                height='233'
                                width='151' />
                        }
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-title">
                        <h5>
                            {props.book.author}
                        </h5>
                        <h4>
                            {props.book.title}
                        </h4>
                        <p className="card-text">
                            {props.book.description}
                        </p>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <a href="#" className="btn btn-md main-color text-white">
                        View Detials
                    </a>
                </div>
            </div>
        </div>
    );
}
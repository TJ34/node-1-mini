books = [];
id = 0;

module.exports = {
    read(req, res){
        return res.status(200).send(books)
    },
    create(req,res){
        const {title,author} = req.body
         books.push({id, title, author});
         id++;
         res.status(200).send(books);
    },
    update(req,res){
        const {title,author} = req.body;
        const updateID = req.params.id;
        const bookIndex = books.findIndex(book => book.id==updateID);
        let book = books[bookIndex];

        books[bookIndex] = {
            id: book.id,
            title: title || book.title,
            author: author || book.author
        }

        res.status(200).send(books);
    },
    delete(req,res){
        const deleteID = req.params.id;
        bookIndex = books.findIndex(book=>book.id==deleteID);
        books.splice(bookIndex,1);

        res.status(200).send(books)
    }
}
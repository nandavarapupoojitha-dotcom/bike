package com.example.books_management;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BookService {

    private List<Book> books = new ArrayList<>();

    // GET
    public List<Book> getAllBooks() {
        return books;
    }

    // POST
    public Book saveBook(Book book) {
        books.add(book);
        return book;
    }

    // PUT
    public Book updateBook(Long id, Book book) {
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).getId().equals(id)) {
                books.set(i, book);
                return book;
            }
        }
        return null;
    }

    // DELETE
    public void deleteBook(Long id) {
        books.removeIf(b -> b.getId().equals(id));
    }
}
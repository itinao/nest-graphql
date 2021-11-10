
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface NewBookInput {
    title: string;
    price: number;
    author: string[];
}

export interface Book {
    id: string;
    title: string;
    author: string;
    price: number;
    createdAt: DateTime;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    getBook(id: number): Book | Promise<Book>;
}

export interface IMutation {
    addBook(newBook: newBookInput): Book | Promise<Book>;
    removeBook(id: number): boolean | Promise<boolean>;
}

export type DateTime = any;
type Nullable<T> = T | null;

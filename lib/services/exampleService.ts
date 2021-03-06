import * as mongoose from "mongoose";
import { injectable, inject } from "inversify";
import { BookService } from "./interfaces";
import { ExampleSchema } from "../models/exampleModel";

mongoose.connect(
  process.env.MONGOURL,
  { useNewUrlParser: true }
);

@injectable()
export class ExampleService implements BookService {
  private booksModel;

  constructor() {
    this.booksModel = mongoose.model("books", ExampleSchema);
  }
  public async getAllBooks() {
    return "CD TEST = example service - getAllBooks";
  }
}

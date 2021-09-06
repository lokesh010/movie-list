import React from 'react';
import 'regenerator-runtime';
import { fetchMoviesReq } from "api/movie";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("checks api to see fetch movies", () => {
    fetchMoviesReq()
        .then(data => {
            expect(typeof data.results).toBe("object")
        })
        .catch(err => {
            expect(typeof err.message).toBe("string");
        })
});
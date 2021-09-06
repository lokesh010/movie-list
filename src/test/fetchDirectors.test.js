import React from 'react';
import 'regenerator-runtime';
import { fetchUserIDReq } from "api/directors";
import { configure, } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("checks api to see fetch director by ID", () => {
    fetchUserIDReq()
        .then(data => {
            expect(typeof data.results).toBe("object");
        })
        .catch(err => {
            expect(typeof err.message).toBe("string");
        })

});
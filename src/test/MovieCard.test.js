import 'regenerator-runtime';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import React from 'react';
import MovieCard from "components/MovieCard";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { fetchMoviesReq } from 'api/movie';
configure({ adapter: new Adapter() });

describe('MovieCard', () => {

    it("props validation", async () => {
        const { results } = await fetchMoviesReq();
        const index = 0;
        const movie = {
            id: results[index].id,
            title: results[index].title,
            poster_path: results[index].poster_path,
            overview: results[index].overview,
            release_date: results[index].release_date,
            vote_count: results[index].vote_count,
            original_language: results[index].original_language,
        }

        const isFavourite = _ => Math.random() < 0.5;
        const isLoading = false;

        const wrapper = shallow(
            <MovieCard
                index={index}
                movie={movie}
                isFavourite={isFavourite}
                isLoading={isLoading}
            />
        );

        expect(wrapper.find('[data-testid="title"]').text()).toBe(results[index].title);
        expect(wrapper.find('[data-testid="overview"]').text()).toBe(results[index].overview);
        expect(wrapper.find('[data-testid="release_date"]').text()).toBe(`Release Date: ${results[index].release_date}`);
        expect(wrapper.find('[data-testid="vote_count"]').text()).toBe(` ${results[index].vote_count}`);
        expect(wrapper.find('[data-testid="original_language"]').text()).toBe(`Language: ${results[index].original_language}`);
        // open modal click
        wrapper.find('[data-testid="click_title"]').simulate('click', { "stopPropagation": () => { } });
        expect(wrapper.find('[data-testid="director_id"]').prop('directorID')).toBe(index + 1);
    });

    it("Open Modal when toggle", async () => {
        const { results } = await fetchMoviesReq();
        const index = 0;
        const movie = {
            id: results[index].id,
            title: results[index].title,
            poster_path: results[index].poster_path,
            overview: results[index].overview,
            release_date: results[index].release_date,
            vote_count: results[index].vote_count,
            original_language: results[index].original_language,
        }
        const isFavourite = _ => Math.random() < 0.5;
        const isLoading = false;
        const wrapper = shallow(
            <MovieCard
                index={index}
                movie={movie}
                isFavourite={isFavourite}
                isLoading={isLoading}
            />
        );
        // open modal click
        wrapper.find('[data-testid="click_title"]').simulate('click', { "stopPropagation": () => { } });
        expect(wrapper.find('[data-testid="director_id"]').prop('isVisible')).toBe(true)
    });
})
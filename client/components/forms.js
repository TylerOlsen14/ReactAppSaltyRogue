import React from 'react';
import { ReactComponent } from '*.svg';

export default class App extends ReactComponent{
    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Legend</legend>
                        <div class="form-group">
                            <label for="exampleTextarea">Example textarea</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
                    <div class="card-header">
                        Header
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Info card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        );
    }
}


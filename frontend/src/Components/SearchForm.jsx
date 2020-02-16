import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Tags" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Description" />
          </div>
        </div>

        <div class="field">
          <div className="control">
            <input type="radio" name="datetype" /> Date Range
          </div>

          <div className="field has-addons">
            
              <input
                className="input"
                type="text"
                placeholder="From Date ( YYYY-MM-DD )"
              />
            </div>
            <div className="field">
              <input
                className="input"
                type="text"
                placeholder="To Date ( YYYY-MM-DD )"
              />
            </div>
          
        </div>

        <div class="field">
          <div className="control">
            <input type="radio" name="datetype" /> Date Regex
          </div>

          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="YYYY-MM-DD" />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary is-fullwidth" onClick={this.props.onSearch}>Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;

import React from 'react'

const graphcoolConditions = [
  { type: "",                name: "Equals" },
  { type: "not",             name: "Not Equals" },
  { type: "in",              name: "In" },
  { type: "not_in",          name: "Not In" },
  { type: "lt",              name: "Less Than" },
  { type: "lte",             name: "Less Than And Equal" },
  { type: "gt",              name: "Greater Than" },
  { type: "gte",             name: "Greater Than And Equal" },
  { type: "contains",        name: "Contains" },
  { type: "not_contains",    name: "Not Contains" },
  { type: "starts_with",     name: "Starts With" },
  { type: "not_starts_with", name: "Not Starts With" },
  { type: "ends_with",       name: "Ends With" },
  { type: "not_ends_with",   name: "Not Ends With" }
]

const SearchForm = (props) => (
  <form onSubmit={props.execSearch}>
    <div className="field has-addons">
      <div className="control">
        <span className="select">
          <select name="column" onChange={props.handleChange}>
            <option value="name">Name</option>
            <option value="code">Code</option>
            <option value="slug">Slug</option>
          </select>
        </span>
      </div>
      <div className="control">
        <span className="select">
          <select name="condition" onChange={props.handleChange}>
            {graphcoolConditions.map(({ type, name }) => (
              <option value={type}>{name}</option>
            ))}
          </select>
        </span>
      </div>
      <div className="control">
        <input
          className="input"
          type="text"
          name="keyword"
          onChange={props.handleChange}
          value={props.tmpSearchKeywords.name_contains}
          placeholder="Search Keyword" />
      </div>
      <div className="control">
        <button type="submit" className="button is-danger">
          Search
        </button>
      </div>
    </div>
  </form>
)

export default SearchForm
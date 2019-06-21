import React from 'react';

class BadgeForm extends React.Component {
  //state={}; //Se inicializa el estado a cero por el tag value aplicado a los campos del formulario. También lo sinputs pasan de no controlado a controlado.
  // handleChange = (e) => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   //  });

  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // };

  handleClick = (e) => {
    console.log('Button was clicked');
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form was submitted');
  //   console.log(this.state);
  // };
  

  render(){

    return(
      <div>
        {/* <h1>New Attendant</h1> Se quita debido a que esta la parte new y la edit ( ya se llama en casa .js) */} 

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />
          </div>

          <div className="form-group">
            <label>Job Tittle</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>

          {this.props.error && (
          
            <p className="text-danger">{this.props.error.message}</p>

          )}
        </form>
      </div>
    )
  }
  // handleClick = e => {
  //   console.log('Button was clicked');
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('Form was submitted');
  //   console.log(this.state);
  // };

  // render() {
  //   return (
  //     <div>
  //       <h1>New Attendant</h1>

  //       <form onSubmit={this.handleSubmit}>
  //         <div className="form-group">
  //           <label>First Name</label>
  //           <input
  //             onChange={this.props.onChange}
  //             className="form-control"
  //             type="text"
  //             name="firstName"
  //             value={this.props.formValues.firstName}
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label>Last Name</label>
  //           <input
  //             onChange={this.props.onChange}
  //             className="form-control"
  //             type="text"
  //             name="lastName"
  //             value={this.props.formValues.lastName}
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label>Email</label>
  //           <input
  //             onChange={this.props.onChange}
  //             className="form-control"
  //             type="email"
  //             name="email"
  //             value={this.props.formValues.email}
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label>Job Title</label>
  //           <input
  //             onChange={this.props.onChange}
  //             className="form-control"
  //             type="text"
  //             name="jobTitle"
  //             value={this.props.formValues.jobTitle}
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label>Twitter</label>
  //           <input
  //             onChange={this.props.onChange}
  //             className="form-control"
  //             type="text"
  //             name="twitter"
  //             value={this.props.formValues.twitter}
  //           />
  //         </div>

  //         <button onClick={this.handleClick} className="btn btn-primary">
  //           Save
  //         </button>
  //       </form>
  //     </div>
  //   );
  // }
}

export default BadgeForm;

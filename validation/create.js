const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCreateInput(data) {
  let errors = {};

  data.id = !isEmpty(data.id) ? data.id : "";
  data.eventname = !isEmpty(data.eventname) ? data.eventname : "";
  data.date = !isEmpty(data.date) ? data.date : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (!Validator.isLength(data.id, { min: 4, max: 6 })) {
    errors.id = " Id Must Be between 4 & 6 Characters";
  }

  if (Validator.isEmpty(data.id)) {
    errors.id = "Id is Required";
  }

  if (!Validator.isLength(data.eventname, { min: 2, max: 30 })) {
    errors.eventname = " Name Must Be between 8 & 30 Characters";
  }

  if (Validator.isEmpty(data.eventname)) {
    errors.eventname = "Event Name is Required";
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = "Date is Required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Location is Required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is Required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const mongoose = require("mongoose");

const keySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: null,
    },
    type: {
      type: String,
      trim: true,
      default: null,
    },
    repository: {
      type: String,
      trim: true,
      default: null,
    },
    token: {
      type: String,
      trim: true,
      default: null,
    },
    project: {
      type: String,
      trim: true,
      default: null,
    },
    username: {
      type: String,
      trim: true,
      default: null,
    },
    password: {
      type: String,
      trim: true,
      default: null,
    },
    Keys: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    url: {
      type: String,
      trim: true,
      default: null,
    },
    email: {
        type: String,
        trim: true,
        default: null,
      },
    document: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
const keys = mongoose.model("keyAndCreds", keySchema);
module.exports = keys;

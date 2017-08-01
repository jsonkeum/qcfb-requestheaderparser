var express = require('express');

module.exports = function(request){
  let ip = null;
  let os = null;
  let lang = null;
  if(request["x-forwarded-for"] != null){
    ip = request["x-forwarded-for"].split(',')[0];
  }
  if(request["user-agent"] != null){
    os = request["user-agent"].split(/[()]/gi)[1];
  }
  if(request["accept-language"] != null){
    lang = request["accept-language"].split(",")[0];
  }
  return {
    "ipaddress":ip,
    "language":lang,
    "os":os
  };
}

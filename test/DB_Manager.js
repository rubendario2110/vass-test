'use strict'
let con = require('../models/connection');
//var gpsk= require ('../routes/getPublicServerKey');
var expect = require('chai').expect;
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)
describe("#database", function () {
    describe("#makeConnection", function () {
        it("Should make a connection with the database", function (done) {
            con.connect(function (err, result) {
                if (err) {
                    done(err);
                    return;
                }
                expect(con.state.toString()).to.equal('authenticated');
                done();
            });
        })
    })
})
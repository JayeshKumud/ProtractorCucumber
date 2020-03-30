import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import { calculator } from '../pages/calculator';
import { logger } from '../../config/logger';
import chai from 'chai';

import { opps } from '../util/opps';
import { urls } from '../testdata/environment.json'

var calc = new calculator();
var opp = new opps();
var expect = chai.expect;
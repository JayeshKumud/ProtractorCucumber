import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import { calculator } from '../../pages/calculator';
import { logger } from '../../../config/logger';
import chai from 'chai';

var calc = new calculator();
var expect = chai.expect;
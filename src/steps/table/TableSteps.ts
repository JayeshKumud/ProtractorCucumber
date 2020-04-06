import { Given, TableDefinition } from "cucumber";
import { Logger } from "../../../config/Logger";
import chai from 'chai';

var expect = chai.expect;

Given('I enter below number', async (table : TableDefinition) => {
    table.rows().forEach((row) => {
        row.forEach((cell) => {
            Logger.Log(cell.toString());
            expect(cell).to.not.equal('1');
        })
    })
});
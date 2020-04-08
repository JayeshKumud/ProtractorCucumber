import { Given, TableDefinition } from "cucumber";
import { Logger } from "../../helpers/Logger";
import chai from 'chai';

var expect = chai.expect;

Given('I enter below number', async (table : TableDefinition) => {
    table.rows().forEach((row) => {
        row.forEach((cell) => {
            Logger.log(cell.toString());
            expect(cell).to.not.equal('1');
        })
    })
});
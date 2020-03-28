import { Given, TableDefinition } from "cucumber";
import { logger } from "../../config/logger";
import chai from 'chai';

var expect = chai.expect;


Given('I enter below number', async (table : TableDefinition) => {
    table.rows().forEach((row) => {
        row.forEach((cell) => {
            logger.Log().debug(cell.toString());
            expect(cell).to.not.equal('1');
        })
    })
});
// -d "cid= C1306204" --data-urlencode " name=Testscommand" --data-urlencode " person_type=c" --data-urlencode "cnp_fiscal_code=12345679" https://rest2-test.rotld.ro:6080

const contactCorrect = contact => {
  // Input parameters:
  // ▪ format [string]: json|xml defaults to ‘json’ [optional]
  // ▪ lang [string]: en|ro defaults to ‘en’ [optional]
  // ▪ cid [string]: registrant id [mandatory]
  // ▪ person_type[string] [mandatory] : Pemited values: p|ap|nc|c|gi|pi|o
  // ▪ cnp_fiscal_code[string:utf-8] [mandatory]: An identification number for persons (personal ID, passport
  // number, driving license, etc),fiscal code for companies or other unique identification number or
  // sequence of characters for juridical entities. Mandatory for Romanian entities. Optional for foreigners.
  // Max Length: 40 chars. Min. Length: 5 chars.
  // ▪ registration_number [string:utf-8] [optional]. Mandatory for Commercial Romanian entities (where
  // person_type is 'c'). Optional for foreigners or other Romanian entities. Max Length: 40 chars
  const commandName = "contact-correct";

  return [commandName, contact];
};

module.exports = contactCorrect;

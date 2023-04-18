describe("auto ria phone parsing", ()=> {

  it('read urls from the fixtures/urls.json', ()=> {

    cy.fixture('urls.json').each(url => {
      const urlAuto = url
      cy.intercept('GET', 'https://auto.ria.com/users/phones/**').as('getPhone')

      cy.visit(urlAuto)
      cy.get('.phones_item span.bold').first().click()

      cy.wait(3000)
      cy.wait('@getPhone').then(xhr => {
        cy.get('#show-phone .show-phone-header div').invoke('text').then(advertTitle => {
          const title = advertTitle;

          expect(xhr.response.body.formattedPhoneNumber).not.to.be.undefined;
          const phoneNumber = xhr.response.body.formattedPhoneNumber;

          const filename = 'parsedData/phones.json';
          cy.readFile(filename).then((obj) => {
          obj.push({
            "title": title,
            "url": urlAuto,
            "phoneNumber": phoneNumber
          })
          // write the merged object
          cy.writeFile(filename, obj)
        })
        })


      })

    })
  })
})
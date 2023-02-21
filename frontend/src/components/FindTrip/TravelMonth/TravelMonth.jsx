<ReactBootstrap.Form.Group controlId="month_group">
          <ReactBootstrap.Form.Label>Travel Month(s)</ReactBootstrap.Form.Label>
          {/* https://stackoverflow.com/questions/28624763/retrieving-value-from-select-with-multiple-option-in-react */}
          <ReactBootstrap.Form.Control id="month-bootstrap" name="month" as="select" multiple
            value={month} 
            onChange={evt => {
              const selectedMonths=[];
              for (let i=0; i< evt.target.selectedOptions.length; i++) {
                selectedMonths.push(parseInt(evt.target.selectedOptions[i].value));
              }
              setMonth(selectedMonths);
            }}
          >
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>Jun</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </ReactBootstrap.Form.Control>
        </ReactBootstrap.Form.Group>

<ReactBootstrap.Form.Group controlId="prcp-group" className="col-12 col-md-4">
            <ReactBootstrap.Form.Label>Precipitation</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control as="select" value={prcp} onChange={evt => setPrcp(evt.target.value)} name="precipitation">
                <option value="">Any Level</option>
                <option value="quartile1">Low         (0-27 mm/month)</option>
                <option value="quartile2">Medium Low  (28-60 mm/month)</option>
                <option value="quartile3">Medium High (61-110 mm/month)</option>
                <option value="quartile4">High        (111 mm+/month)</option>
            </ReactBootstrap.Form.Control>
          </ReactBootstrap.Form.Group>
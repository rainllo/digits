import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='timezone-background'>
          <Grid container centered stackable columns={3}>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name="globe" inverted/>
              <Header as='h1' inverted>Global Users</Header>
              <Header as='h3' inverted>This address book lets users around the world register and save their contact info. You can only see contacts you have created.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name="address book" inverted/>
              <Header as='h1' inverted>Convenient Contacts</Header>
              <Header as='h3' inverted>Save your contacts with detailed information into an electronic address book.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name="bell" inverted/>
              <Header as='h1' inverted>Quick Reminders</Header>
              <Header as='h3' inverted>Every time you chat with someone you can make a note that summarizes your conversation.
                This note is saved with a timestamp alongside your contacts to remind you about your chat.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;

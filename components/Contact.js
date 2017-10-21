var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'./Contact.png'}/>
        <p className={'contactLabel'}>
          Imię: {this.props.item.firstName}
        </p>
        <p className={'contactLabel'}>
          Nazwisko: {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
          {this.props.item.email}
        </a>
</div>
    )

    // =========  render napisany za pomocą czystego react.js.
    // return (
    //   React.createElement('div', {className: 'contactItem'},
    //     React.createElement('img', {
    //       className: 'contactImage',
    //       src: './Contact.png'
    //     }),
    //     React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
    //     React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
    //     React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
    //       this.props.item.email
    //     )
    //   )
    // )
  },
});

# Flashoff

[Flashoff](http://flashoff.drexed.com) is a refreshingly modern responsive web framework for beautiful and faster project development.

To get started, check out [http://flashoff.drexed.com](http://flashoff.drexed.com)!

## Installation

Add this line to your application's Gemfile:

    gem 'flashoff'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install flashoff

## Usage

Add the CSS files you want to include:

```ruby
*= require reset
*= require ad
*= require alert
*= require breadcrumb
*= require button
*= require code
*= require collapse
*= require datepicker
*= require dropdown
*= require footer
*= require form
*= require grid
*= require header
*= require icon
*= require image
*= require label_and_badge
*= require link
*= require list
*= require map
*= require modal
*= require pagination
*= require placeholder
*= require popover
*= require progress
*= require tab
*= require table
*= require timepicker
*= require tooltip
*= require transition
*= require trunk
*= require typography
```

Add the JS files you want to include:

```ruby
//= require alert
//= require collapse
//= require date_picker
//= require dropdown
//= require file_input
//= require map
//= require modal
//= require tab
//= require time_picker
//= require tooltip
//= require popover
//= require transition
```
var people = new Array();

if (!window.location.hash) {
	window.location.hash = "#pid=KW7S-VQJ"
}

$(document).ready(function () {
	// Construct the url params from data values
  $(document.body).on('click', '.widgetAction', function() {
		var str = "";
		var obj = $(this).data();
		for (var key in obj) {
			if (key == "bs.popover") {
  			continue;
  		}
	    if (str != "") {
	        str += "&";
	    }
	    str += key + "=" + obj[key];
		}
    window.location.hash = str;
    loadContent();
    return false;
  });

  // No updating of that hash when it's just for a popover
  $(document.body).on('click', '.nameWrapper a', function(e) {
		e.preventDefault();
    return false;
  });    

  // Construct the proper details about a person, only what's used by the UI 
  // and cache results in a variable
  function getWidgetPersonDetails(response) {
		// Start the data object. Starting with the primary person.
		var data = response.display;
		// Grab the ID
		data.id = response.id;
		// If already cached, return it
		if (people[data.id]) { 
			return people[data.id];
		}
		// Grab the LifeSpan
		data.lifespan = response.getLifeSpan();
		data.isLiving = response.living;
		// Cache that person - remove when in SDK
		people[data.id] = data;
		if (data.gender) {
			data.gender = data.gender.toLowerCase()
		}		
		return data;
  }

  // Only one popover open at time
	$(':not(#anything)').on('click', function (e) {
	    $('.personcard').each(function () {
	        //the 'is' for buttons that trigger popups
	        //the 'has' for icons and other elements within a button that triggers a popup
	        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	            $(this).popover('hide');
	            return;
	        }
	    });
	});

	FamilySearch.init({
	  app_key: 'WCQY-7J1Q-GKVV-7DNM-SQ5M-9Q5H-JX3H-CMJK',
	  environment: 'sandbox',
	  save_access_token: true,
	  auth_callback: "http://rootsdev.org/SumoApp/",
	  http_function: $.ajax,
	  deferred_function: $.Deferred
	});

	loadContent();	


	function changesWidget(selector) {
		var sourcesData = SumoWidgets['changesContainer.html'].render();		
		$('.changesWidgetContainer').html(sourcesData);
			// Get the person source references
			FamilySearch.getPersonChangeSummary(id).then(function (response) {
				
				console.log('Changes');
				console.log(response);
				console.log(response.getChanges());
				if (!response.persons) {
					$('.change-objects').html('None'); 
					return;
				}
				var sources = new Array();
				// Queue the source description call
				var promises = [];
				for (var s = 0, sourceLength = response.persons[0].sources.length; s < sourceLength; s++) {
					sources[s] = sourceWidgetDetails(response.persons[0].sources[s]);
					promises.push(sourceWidgetPromise(sources[s].sourceId));
				}
				// Process the results after completed
				$.when.apply($, promises).then(function() {
					var sources2 = [];
  				for (var i = 0, len = arguments.length; i < len; i++) {
  					sources2[i] = sourceWidgetFullDetails(arguments[i]);
  					for ( var attr in sources2[i] ) { sources[i][attr] = sources2[i][attr]; }
  				}
	  			if (!sources) {
	  				return;
	  			}
  				var theData = { sources : sources };
	        var sourcesData = SumoWidgets['change.html'].render(theData);
	        $('.change-objects').html(sourcesData);  	
	        jQuery("abbr.timeago").timeago();			
				});
			});
	}


	function discussionsWidget(selector) {
		var sourcesData = SumoWidgets['discussionsContainer.html'].render();		
		$('.sourcesWidgetContainer').html(sourcesData);
			// Get the person source references
			FamilySearch.getPersonDiscussionRefs(id).then(function (response) {
				console.log(response);
				console.log(response.getDiscussionRefs());
				if (!response.persons) {
					$('.discussion-objects').html('None'); 
					return;
				}
				
				return;
				var discussion = new Array();
				// Queue the source description call
				var promises = [];
				for (var s = 0, sourceLength = response.persons[0].discussion.length; s < sourceLength; s++) {
					sources[s] = sourceWidgetDetails(response.persons[0].sources[s]);
					promises.push(sourceWidgetPromise(sources[s].sourceId));
				}
				// Process the results after completed
				$.when.apply($, promises).then(function() {
					var sources2 = [];
  				for (var i = 0, len = arguments.length; i < len; i++) {
  					sources2[i] = sourceWidgetFullDetails(arguments[i]);
  					for ( var attr in sources2[i] ) { sources[i][attr] = sources2[i][attr]; }
  				}
	  			if (!sources) {
	  				return;
	  			}
  				var theData = { sources : sources };
	        var sourcesData = SumoWidgets['source.html'].render(theData);
	        $('.source-objects').html(sourcesData);  	
	        jQuery("abbr.timeago").timeago();			
				});
			});
	}
	// Process the refs return to a useful object.
	function discussionWidgetDetails(source) {
		var data = {
			id : source.id,
			sourceId : source.getSourceDescriptionId(),
			contributor : source.attribution.contributor.resourceId,
			modified : new Date(source.attribution.modified).toISOString(),
			tags : source.tags,
			justification : source.attribution.changeMessage,
		};
		// Clean up the tags
		var tags = new Array();
		for (var t = 0, tagsLength = data.tags.length; t < tagsLength; t++) {
			tags[t] = { tag: data.tags[t].resource.replace('http://gedcomx.org/', '') };
		}
		data.tags = tags;
		return data;
	}

	// Queue the response for the source descriptionc all
	function discussionWidgetPromise(id) {
		return FamilySearch.getSourceDescription(id);
	}

	// Extract the useful details from the source descriptionc all
	function discussionWidgetFullDetails(source) {
		source = source.getSourceDescription();
		var data = {
			title : source.getTitle(),
			url : source.about,
			citation : source.getCitation(),
			note : source.getText(),
		};
		return data;
	}	

	function sourcesWidget(selector) {
		var sourcesData = SumoWidgets['sourcesContainer.html'].render();		
		$('.sourcesWidgetContainer').html(sourcesData);
			// Get the person source references
			FamilySearch.getPersonSourceRefs(id).then(function (response) {
				if (!response.persons) {
					$('.source-objects').html('None'); 
					return;
				}
				var sources = new Array();
				// Queue the source description call
				var promises = [];
				for (var s = 0, sourceLength = response.persons[0].sources.length; s < sourceLength; s++) {
					sources[s] = sourceWidgetDetails(response.persons[0].sources[s]);
					promises.push(sourceWidgetPromise(sources[s].sourceId));
				}
				// Process the results after completed
				$.when.apply($, promises).then(function() {
					var sources2 = [];
  				for (var i = 0, len = arguments.length; i < len; i++) {
  					sources2[i] = sourceWidgetFullDetails(arguments[i]);
  					for ( var attr in sources2[i] ) { sources[i][attr] = sources2[i][attr]; }
  				}
	  			if (!sources) {
	  				return;
	  			}
  				var theData = { sources : sources };
	        var sourcesData = SumoWidgets['source.html'].render(theData);
	        $('.source-objects').html(sourcesData);  	
	        jQuery("abbr.timeago").timeago();			
				});
			});
	}
	// Process the refs return to a useful object.
	function sourceWidgetDetails(source) {
		var data = {
			id : source.id,
			sourceId : source.getSourceDescriptionId(),
			contributor : source.attribution.contributor.resourceId,
			modified : new Date(source.attribution.modified).toISOString(),
			tags : source.tags,
			justification : source.attribution.changeMessage,
		};
		// Clean up the tags
		var tags = new Array();
		for (var t = 0, tagsLength = data.tags.length; t < tagsLength; t++) {
			tags[t] = { tag: data.tags[t].resource.replace('http://gedcomx.org/', '') };
		}
		data.tags = tags;
		return data;
	}

	// Queue the response for the source descriptionc all
	function sourceWidgetPromise(id) {
		return FamilySearch.getSourceDescription(id);
	}

	// Extract the useful details from the source descriptionc all
	function sourceWidgetFullDetails(source) {
		source = source.getSourceDescription();
		var data = {
			title : source.getTitle(),
			url : source.about,
			citation : source.getCitation(),
			note : source.getText(),
		};
		return data;
	}


	// Construct the family members widget
	function familyMembersWidget(selector) {
		if (!selector) {
			return;
		}
		FamilySearch.getPersonWithRelationships(id, {persons: true   }).then(function (response) {
      // Add the widget container if it doesn't already exist
      if (!$('.spouses-children').length) {
      	$(selector).html(SumoWidgets['familyContainer.html'].render());
			}

    	var fathers = response.getFatherIds();
    	var mothers = response.getMotherIds();
				// The render object
    		var render = new Array();
    		render.families = new Array();
    		render.families[0] = new Array();
    		// Start the data object. Starting with the primary person.
    		var data = getWidgetPersonDetails(response.getPrimaryPerson());
    		if (data.gender == "male") {
    			render.families[0].husband = data;
    		} else if (data.gender == "female") {
    			render.families[0].wife = data;
    		}
    		data.spouses = new Array();
    		var spouses = response.getSpouses();

        for (var s = 0, spousesLength = spouses.length; s < spousesLength; s++) {
        	if (!render.families[s]) {
        		render.families[s] = new Object();
        	}
        	data.spouses[s] = getWidgetPersonDetails(spouses[s]);
        	if (data.gender == "male") {
        		render.families[s].husband = render.families[0].husband;
        		render.families[s].wife = data.spouses[s];
        	} else if (data.gender == "female") {
        		render.families[s].wife = render.families[0].wife;
        		render.families[s].husband = data.spouses[s];
        	}
        	
        	var children = response.getChildren(spouses[s].id);
        	data.spouses[s].children = new Array();
        	for (var c = 0, childrenLength = children.length; c < childrenLength; c++) {
        		data.spouses[s].children[c] = getWidgetPersonDetails(children[c]);
        	}
        	render.families[s].children = data.spouses[s].children;
        }
        data.parents = new Array();
        data.parents.families = getParentChildRelationshipData(response.getParentRelationships(), response);
        for (var p = 0, parentsLength = data.parents.families.length; p < parentsLength; p++) {
        	continue;
        	if (data.parents.families[p].husband) {
        		console.log('husband exists');
						var children = response.getChildRelationships(data.parents.families[p].husband.id);
						console.log(children);
        	} else {
        		console.log('wife exists');
        		var children = response.getChildren(data.parents.families[p].wife.id);
        	}
        	if (children) {
		      	for (var c = 0, childrenLength = children.length; c < childrenLength; c++) {
		      		data.parents.families[p].children[c] = getWidgetPersonDetails(children[c]);
		      	}
        	}
        }

        var immediate = SumoWidgets['family.html'].render(render, {
        	person:SumoWidgets['person.html'],
        	popover:SumoWidgets['popover.html'],
        	event:SumoWidgets['event.html']
        });
        $('.spouses-children').html(immediate);

        var parental = SumoWidgets['family.html'].render(data.parents, {
        	person:SumoWidgets['person.html'],
        	popover:SumoWidgets['popover.html'],
        	event:SumoWidgets['event.html']
        });
        $('.parents-children').html(parental);

		  	// Must reload the popover for the new content
		  	$('.personcard').popover({
					html : true, 
					content : function() {
						return SumoWidgets['popover.html'].render(people[$(this).data('pid')]);
					}
				});
    });		
	}

	// Get the pid from the URL hash
	function getId() {
		id = window.location.hash.replace('#', '');
    id = id.replace('pid=', '');
    id = id.split('&', 1);
    id = id[0];		
	}

  // Updates the view.
	function loadContent() {
    getId(); // Get the id from the hashtag
	  FamilySearch.getAccessToken().then(function () {
	  	// Load the Family Members Widget
	  	familyMembersWidget('.familyWidgetContainer');
	  	sourcesWidget('.sourcesWidgetContainer');
	  	changesWidget('.changesWidgetContainer');
	  	discussionsWidget('.discussionsWidgetContainer');
	  	// Blank open links
    	$('a[rel="external"]').attr('target', '_blank');

	  });
	}


	function getParentChildRelationshipData(relationships, response) {
	  var results = [];
	  for (var i = 0, len = relationships.length; i < len; i++) {
	      var rel = relationships[i];
	      results.push({
	          'rid': rel.id,
	          'husband': getWidgetPersonDetails(response.getPerson(rel.getFatherId())),
	          'wife': getWidgetPersonDetails(response.getPerson(rel.getMotherId())),
	          'fatherRelationship': getFactData(rel.getFatherFacts()),
	          'motherRelationship': getFactData(rel.getMotherFacts())
	      }); 
	  }
	  return results;
	}

	function getSpouseRelationshipData(relationships) {
	  var results = [];
	  for (var i = 0, len = relationships.length; i < len; i++) {
	      var rel = relationships[i];
	      results.push({
	          'relationshipID': rel.id,
	          'husband': rel.getHusbandId(),
	          'wife': rel.getWifeId(),
	          'pid': rel.getPrimaryId(),
	          'sid': rel.getSpouseId(),
	          'events': getFactData(rel.getFacts())
	      });
	  }
	  return results;
	}

	function getFactData(facts) {
	  var results = [];
	  for (var i = 0, len = facts.length; i < len; i++) {
	      var fact = facts[i];
	      results.push({
	          'id': fact.id,
	          //'Contributor': fact.getContributor(),
	          'type': fact.type,
	          'modified': fact.modified,
	          'Place': fact.getPlace()
	      });
	  }
	  return results;
	}



});
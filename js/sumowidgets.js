this["SumoWidgets"] = this["SumoWidgets"] || {};
this["SumoWidgets"]["change.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");if(_.s(_.f("changes",c,p,1),c,p,0,12,29,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("This is a test");_.b("\n");});c.pop();}return _.fl();;});
this["SumoWidgets"]["changesContainer.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class='row'>");_.b("\n" + i);_.b("  <div class=\"col-lg-12\">");_.b("\n" + i);_.b("    <div class=\"page-header\">");_.b("\n" + i);_.b("      <h4 id=\"grid\">Changes</h4>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"panel panel-primary changes-panel\">");_.b("\n" + i);_.b("      <div class=\"panel-body change-objects\">");_.b("\n" + i);_.b("        Loading...");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
this["SumoWidgets"]["children.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<tr>");_.b("\n" + i);_.b("  <td>");_.b("\n" + i);_.b(_.rp("person",c,p,"    "));_.b("  </td>");_.b("\n" + i);_.b("</tr>");return _.fl();;});
this["SumoWidgets"]["discussion.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"panel panel-default\">");_.b("\n" + i);_.b("  <div class=\"panel-heading\">");_.b("\n" + i);_.b("    <h4 class=\"panel-title\"><a class=\"collapsed\" data-parent=");_.b("\n" + i);_.b("    \"#accordion\" data-toggle=\"collapse\" href=");_.b("\n" + i);_.b("    \"#collapseOne\">Discussion #1</a> <small class=");_.b("\n" + i);_.b("    \"discussion-updated\">updated <time datetime=");_.b("\n" + i);_.b("    \"2001-05-15 19:00\">14 mins ago</time></small> <span class=");_.b("\n" + i);_.b("    \"badge pull-right\">5</span></h4>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <div class=\"panel-collapse collapse\" id=\"collapseOne\" style=");_.b("\n" + i);_.b("  \"height: 0px;\">");_.b("\n" + i);_.b("    <div class=\"panel-body\">");_.b("\n" + i);_.b("      <div class=\"media\">");_.b("\n" + i);_.b("        <a class=\"pull-left fa fa-comments-o\" href=\"#\" style=");_.b("\n" + i);_.b("        \"font-style: italic\">&nbsp;</a>");_.b("\n" + i);_.b("        <div class=\"media-body\">");_.b("\n" + i);_.b("          <div class=\"discussion\">");_.b("\n" + i);_.b("            <h4 class=\"media-heading\">This is a test</h4>Cras sit");_.b("\n" + i);_.b("            amet nibh libero, in gravida nulla. Nulla vel metus");_.b("\n" + i);_.b("            scelerisque ante sollicitudin commodo. Cras purus odio,");_.b("\n" + i);_.b("            vestibulum in vulputate at, tempus viverra turpis.");_.b("\n" + i);_.b("            Fusce condimentum nunc ac nisi vulputate fringilla.");_.b("\n" + i);_.b("            Donec lacinia congue felis in faucibus.");_.b("\n" + i);_.b("            <h6>by <a class=\"fs-contributor\" href=\"#dovy\">Dovy");_.b("\n" + i);_.b("            Paukstys</a>, <small><time datetime=");_.b("\n" + i);_.b("            \"2001-05-15 19:00\">14 mins ago</time></small></h6>");_.b("\n" + i);_.b("            <div class=\"media\">");_.b("\n" + i);_.b("              <a class=\"pull-left fa fa-comments-o\" href=\"#\" style=");_.b("\n" + i);_.b("              \"font-style: italic\">&nbsp;</a>");_.b("\n" + i);_.b("              <div class=\"media-body\">");_.b("\n" + i);_.b("                Cras sit amet nibh libero, in gravida nulla. Nulla");_.b("\n" + i);_.b("                vel metus scelerisque ante sollicitudin commodo.");_.b("\n" + i);_.b("                Cras purus odio, vestibulum in vulputate at, tempus");_.b("\n" + i);_.b("                viverra turpis. Fusce condimentum nunc ac nisi");_.b("\n" + i);_.b("                vulputate fringilla. Donec lacinia congue felis in");_.b("\n" + i);_.b("                faucibus.");_.b("\n" + i);_.b("                <h6>by <a class=\"fs-contributor\" href=\"#dovy\">Dovy");_.b("\n" + i);_.b("                Paukstys</a>, <small><time datetime=");_.b("\n" + i);_.b("                \"2001-05-15 19:00\">14 mins ago</time></small></h6>");_.b("\n" + i);_.b("                <div class=\"media\">");_.b("\n" + i);_.b("                  <a class=\"pull-left fa fa-comments-o\" href=\"#\"");_.b("\n" + i);_.b("                  style=\"font-style: italic\">&nbsp;</a>");_.b("\n" + i);_.b("                  <div class=\"media-body\">");_.b("\n" + i);_.b("                    Cras sit amet nibh libero, in gravida nulla.");_.b("\n" + i);_.b("                    Nulla vel metus scelerisque ante sollicitudin");_.b("\n" + i);_.b("                    commodo. Cras purus odio, vestibulum in");_.b("\n" + i);_.b("                    vulputate at, tempus viverra turpis. Fusce");_.b("\n" + i);_.b("                    condimentum nunc ac nisi vulputate fringilla.");_.b("\n" + i);_.b("                    Donec lacinia congue felis in faucibus.");_.b("\n" + i);_.b("                    <h6>by <a class=\"fs-contributor\" href=");_.b("\n" + i);_.b("                    \"#dovy\">Dovy Paukstys</a>,");_.b("\n" + i);_.b("                    <small><time datetime=\"2001-05-15 19:00\">14");_.b("\n" + i);_.b("                    mins ago</time></small></h6>");_.b("\n" + i);_.b("                  </div>");_.b("\n" + i);_.b("                </div>");_.b("\n" + i);_.b("              </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"media\">");_.b("\n" + i);_.b("              <a class=\"pull-left fa fa-comments-o\" href=\"#\" style=");_.b("\n" + i);_.b("              \"font-style: italic\">&nbsp;</a>");_.b("\n" + i);_.b("              <div class=\"media-body\">");_.b("\n" + i);_.b("                Cras sit amet nibh libero, in gravida nulla. Nulla");_.b("\n" + i);_.b("                vel metus scelerisque ante sollicitudin commodo.");_.b("\n" + i);_.b("                Cras purus odio, vestibulum in vulputate at, tempus");_.b("\n" + i);_.b("                viverra turpis. Fusce condimentum nunc ac nisi");_.b("\n" + i);_.b("                vulputate fringilla. Donec lacinia congue felis in");_.b("\n" + i);_.b("                faucibus.");_.b("\n" + i);_.b("                <h6>by <a class=\"fs-contributor\" href=\"#dovy\">Dovy");_.b("\n" + i);_.b("                Paukstys</a>, <small><time datetime=");_.b("\n" + i);_.b("                \"2001-05-15 19:00\">14 mins ago</time></small></h6>");_.b("\n" + i);_.b("              </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"panel panel-default\">");_.b("\n" + i);_.b("  <div class=\"panel-heading\">");_.b("\n" + i);_.b("    <h4 class=\"panel-title\"><a class=\"collapsed\" data-parent=");_.b("\n" + i);_.b("    \"#accordion\" data-toggle=\"collapse\" href=");_.b("\n" + i);_.b("    \"#collapseTwo\">Discussion #2</a> <small class=");_.b("\n" + i);_.b("    \"discussion-updated\">updated <time datetime=");_.b("\n" + i);_.b("    \"2001-05-15 19:00\">14 mins ago</time></small> <span class=");_.b("\n" + i);_.b("    \"badge pull-right\">5</span></h4>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <div class=\"panel-collapse collapse\" id=\"collapseTwo\" style=");_.b("\n" + i);_.b("  \"height: 0px;\">");_.b("\n" + i);_.b("    <div class=\"panel-body\">");_.b("\n" + i);_.b("      <div class=\"media\">");_.b("\n" + i);_.b("        <a class=\"pull-left fa fa-comments-o\" href=\"#\" style=");_.b("\n" + i);_.b("        \"font-style: italic\">&nbsp;</a>");_.b("\n" + i);_.b("        <div class=\"media-body\">");_.b("\n" + i);_.b("          <div class=\"discussion\">");_.b("\n" + i);_.b("            <h4 class=\"media-heading\">This is a test</h4>Cras sit");_.b("\n" + i);_.b("            amet nibh libero, in gravida nulla. Nulla vel metus");_.b("\n" + i);_.b("            scelerisque ante sollicitudin commodo. Cras purus odio,");_.b("\n" + i);_.b("            vestibulum in vulputate at, tempus viverra turpis.");_.b("\n" + i);_.b("            Fusce condimentum nunc ac nisi vulputate fringilla.");_.b("\n" + i);_.b("            Donec lacinia congue felis in faucibus.");_.b("\n" + i);_.b("\n" + i);_.b("            <h6>by <a class=\"fs-contributor\" href=\"#dovy\">Dovy");_.b("\n" + i);_.b("            Paukstys</a>, <small><time datetime=");_.b("\n" + i);_.b("            \"2001-05-15 19:00\">14 mins ago</time></small></h6>");_.b("\n" + i);_.b("\n" + i);_.b("            <div class=\"media\">");_.b("\n" + i);_.b("              <a class=\"pull-left fa fa-comments-o\" href=\"#\" style=");_.b("\n" + i);_.b("              \"font-style: italic\">&nbsp;</a>");_.b("\n" + i);_.b("              <div class=\"media-body\">");_.b("\n" + i);_.b("                Cras sit amet nibh libero, in gravida nulla. Nulla");_.b("\n" + i);_.b("                vel metus scelerisque ante sollicitudin commodo.");_.b("\n" + i);_.b("                Cras purus odio, vestibulum in vulputate at, tempus");_.b("\n" + i);_.b("                viverra turpis. Fusce condimentum nunc ac nisi");_.b("\n" + i);_.b("                vulputate fringilla. Donec lacinia congue felis in");_.b("\n" + i);_.b("                faucibus.");_.b("\n" + i);_.b("                <h6>by <a class=\"fs-contributor\" href=\"#dovy\">Dovy");_.b("\n" + i);_.b("                Paukstys</a>, <small><time datetime=");_.b("\n" + i);_.b("                \"2001-05-15 19:00\">14 mins ago</time></small></h6>");_.b("\n" + i);_.b("              </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"media\">");_.b("\n" + i);_.b("              <a class=\"pull-left fa fa-comments-o\" href=\"#\" style=");_.b("\n" + i);_.b("              \"font-style: italic\">&nbsp;</a>");_.b("\n" + i);_.b("              <div class=\"media-body\">");_.b("\n" + i);_.b("                Cras sit amet nibh libero, in gravida nulla. Nulla");_.b("\n" + i);_.b("                vel metus scelerisque ante sollicitudin commodo.");_.b("\n" + i);_.b("                Cras purus odio, vestibulum in vulputate at, tempus");_.b("\n" + i);_.b("                viverra turpis. Fusce condimentum nunc ac nisi");_.b("\n" + i);_.b("                vulputate fringilla. Donec lacinia congue felis in");_.b("\n" + i);_.b("                faucibus.");_.b("\n" + i);_.b("\n" + i);_.b("                <h6>by <a class=\"fs-contributor\" href=\"#dovy\">Dovy");_.b("\n" + i);_.b("                Paukstys</a>, <small><time datetime=");_.b("\n" + i);_.b("                \"2001-05-15 19:00\">14 mins ago</time></small></h6>");_.b("\n" + i);_.b("              </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");_.b("\n");return _.fl();;});
this["SumoWidgets"]["discussionsContainer.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class='row'>");_.b("\n" + i);_.b("  <div class=\"col-lg-12\">");_.b("\n" + i);_.b("  <div class=\"page-header\">");_.b("\n" + i);_.b("    <h2 id=\"grid\">Discussions</h2>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("    <div class=\"panel panel-primary discussion-panel\">");_.b("\n" + i);_.b("      <div class=\"panel-heading\">");_.b("\n" + i);_.b("        <div class=\"options\">");_.b("\n" + i);_.b("          <a class=\"panel-collapse\" href=\"javascript:;\"></a>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <h4 class=\"panel-title\">Discussions</h4>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("      <div class=\"panel-body\">");_.b("\n" + i);_.b("        <div class=\"panel-group discussion-objects\" id=\"discussions-");_.b(_.v(_.f("pid",c,p,0)));_.b("\">");_.b("\n" + i);_.b("          Loading...");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
this["SumoWidgets"]["event.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"event\">");_.b("\n" + i);_.b("  <span class=\"eventName\">");_.b(_.v(_.f("type",c,p,0)));_.b("</span><br/>");_.b("\n" + i);_.b("  ");if(_.s(_.f("originalDate",c,p,1),c,p,0,86,163,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<span class=\"eventDate\" title=\"");_.b(_.v(_.f("standardDate",c,p,0)));_.b("\">");_.b(_.v(_.f("originalDate",c,p,0)));_.b("</span><br/>");});c.pop();}_.b("\n" + i);_.b("  ");if(_.s(_.f("originalPlace",c,p,1),c,p,0,201,322,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<span class=\"eventPlace\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"");_.b(_.v(_.f("standardPlace",c,p,0)));_.b("\">");_.b(_.v(_.f("originalPlace",c,p,0)));_.b("</span>");});c.pop();}_.b("\n" + i);_.b("</div>");return _.fl();;});
this["SumoWidgets"]["family.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");if(_.s(_.f("families",c,p,1),c,p,0,13,1602,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <div class=\"panel panel-default tree-family\">");_.b("\n" + i);_.b("    <div class=\"panel-heading\">");_.b("\n" + i);_.b("      <div class=\"connector\">");_.b("\n" + i);_.b("        &nbsp;");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("      <div class=\"coupleWrapper");if(_.s(_.f("current",c,p,1),c,p,0,195,203,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(" current");});c.pop();}_.b("\"");if(_.s(_.f("relationshipId",c,p,1),c,p,0,235,276,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(" data-relationshipId=\"");_.b(_.v(_.f("relationshipId",c,p,0)));_.b("\"");});c.pop();}if(_.s(_.f("coupleId",c,p,1),c,p,0,308,337,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(" data-coupleId=\"");_.b(_.v(_.f("coupleId",c,p,0)));_.b("\"");});c.pop();}_.b(">");_.b("\n" + i);if(_.s(_.f("husband",c,p,1),c,p,0,372,404,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("person",c,p,"          "));});c.pop();}if(!_.s(_.f("husband",c,p,1),c,p,1,0,0,"")){_.b("          <div class=\"personWrapper\">");_.b("\n" + i);_.b("            <div class=\"nameWrapper\">");_.b("\n" + i);_.b("              <i class=\"fs-icon-male icon-rounded\">&nbsp;</i>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <ul class=\"list-collapsed\">");_.b("\n" + i);_.b("              <li>&nbsp;</li>");_.b("\n" + i);_.b("            </ul>            ");_.b("\n" + i);_.b("          </div>             ");_.b("\n");};if(_.s(_.f("wife",c,p,1),c,p,0,765,801,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("person",c,p,"          "));});c.pop();}if(!_.s(_.f("wife",c,p,1),c,p,1,0,0,"")){_.b("          <div class=\"personWrapper\">");_.b("\n" + i);_.b("            <div class=\"nameWrapper\">");_.b("\n" + i);_.b("              <i class=\"fs-icon-female icon-rounded\">&nbsp;</i>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <ul class=\"list-collapsed\">");_.b("\n" + i);_.b("              <li>&nbsp;</li>");_.b("\n" + i);_.b("            </ul>                        ");_.b("\n" + i);_.b("          </div>        ");_.b("\n");};_.b("      </div>");_.b("\n" + i);if(_.s(_.f("event",c,p,1),c,p,0,1174,1201,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("event",c,p,"        "));});c.pop();}_.b("      <div class=\"clearboth\">");_.b("\n" + i);_.b("        &nbsp;");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"panel-body\">");_.b("\n" + i);_.b("      <table class=\"table-hover\">");_.b("\n" + i);if(_.s(_.f("children",c,p,1),c,p,0,1363,1457,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <tr>");_.b("\n" + i);_.b("          <td>");_.b("\n" + i);_.b(_.rp("person",c,p,"            "));_.b("          </td>");_.b("\n" + i);_.b("        </tr>    ");_.b("\n");});c.pop();}if(!_.s(_.f("children",c,p,1),c,p,1,0,0,"")){_.b("        <tr><td><h3>No children</h3></td></tr>");_.b("\n");};_.b("      </table>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  </div>");_.b("\n");});c.pop();}return _.fl();;});
this["SumoWidgets"]["familyContainer.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"page-header\">");_.b("\n" + i);_.b("      <h2 id=\"grid\">Family Members</h2>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<div class='row'>");_.b("\n" + i);_.b("  <div class=\"col-sm-6\">");_.b("\n" + i);_.b("    <div class=\"panel panel-primary family-panel\">");_.b("\n" + i);_.b("      <div class=\"panel-heading\">");_.b("\n" + i);_.b("        <div class=\"options\">");_.b("\n" + i);_.b("          <a href=\"javascript:;\" class=\"panel-collapse\"><i class=\"fa fa-chevron-up\"></i></a>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <h4 class=\"panel-title\">Spouses and Children</h4>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("      <div class=\"panel-body spouses-children\"></div>");_.b("\n" + i);_.b("    </div>  ");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <div class=\" col-sm-6\">");_.b("\n" + i);_.b("    <div class=\"panel panel-primary family-panel\">");_.b("\n" + i);_.b("      <div class=\"panel-heading\">");_.b("\n" + i);_.b("        <div class=\"options\">");_.b("\n" + i);_.b("          <a href=\"javascript:;\" class=\"panel-collapse\"><i class=\"fa fa-chevron-up\"></i></a>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <h4 class=\"panel-title\">Parents and Children</h4>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("      <div class=\"panel-body parents-children\"></div>");_.b("\n" + i);_.b("    </div>  ");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
this["SumoWidgets"]["person.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"personWrapper\">");_.b("\n" + i);_.b("  <div class=\"nameWrapper\">");_.b("\n" + i);_.b("    <i class=\"fs-icon-");_.b(_.v(_.f("gender",c,p,0)));_.b(" icon-rounded\">&nbsp;</i>");_.b("\n" + i);_.b("    <a href=\"#\" class=\"male personcard name\" data-pid=\"");_.b(_.v(_.f("id",c,p,0)));_.b("\">");_.b(_.v(_.f("name",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("  <ul class=\"list-collapsed\">");_.b("\n" + i);_.b("");if(_.s(_.f("lifespan",c,p,1),c,p,0,243,421,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<li class=\"lifeSpan\" data-toggle=\"tooltip\" title=\"");if(_.s(_.f("birthDate",c,p,1),c,p,0,307,320,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.v(_.f("birthDate",c,p,0)));});c.pop();}_.b(" - ");if(_.s(_.f("deathDate",c,p,1),c,p,0,351,364,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.v(_.f("deathDate",c,p,0)));});c.pop();}_.b("\" data-placement=\"bottom\">");_.b(_.v(_.f("lifespan",c,p,0)));_.b("</li>");});c.pop();}_.b("\n" + i);_.b("    ");if(_.s(_.f("id",c,p,1),c,p,0,446,506,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<li class=\"separator\">-</li>");_.b("\n" + i);_.b("    <li class=\"pid\">");_.b(_.v(_.f("id",c,p,0)));_.b("</li>");});c.pop();}_.b("\n" + i);_.b("  </ul>");_.b("\n" + i);_.b("</div>");return _.fl();;});
this["SumoWidgets"]["popover.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("\n" + i);_.b("<div class=\"cardFrame\">");_.b("\n" + i);_.b("  <div class=\"content\">");_.b("\n" + i);_.b("    <div class=\"profile-image\"></div>");_.b("\n" + i);_.b("\n" + i);_.b("    <div class=\"person clearfix\">");_.b("\n" + i);_.b("\n" + i);_.b("  <div class=\"nameWrapper\">");_.b("\n" + i);_.b("    <i class=\"fs-icon-");_.b(_.v(_.f("gender",c,p,0)));_.b(" icon-rounded\">&nbsp;</i>");_.b("\n" + i);_.b("    <a href=\"#\" class=\"male personcard name widgetAction\" data-pid=\"");_.b(_.v(_.f("id",c,p,0)));_.b("\" data-type=\"person\">");_.b(_.v(_.f("name",c,p,0)));_.b("</a><br />");_.b("\n" + i);_.b("    <span class=\"pid\">");_.b("\n" + i);_.b("        ");_.b(_.v(_.f("id",c,p,0)));_.b("\n" + i);_.b("      </span>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b("  <div class=\"clearfix\">&nbsp;</div>");_.b("\n" + i);_.b("      <div class=\"engageWatch gadget watchGadget\">");_.b("\n" + i);_.b("        <a class=\"watch notwatching\" href=\"\" title=");_.b("\n" + i);_.b("        \"Be notified of updates to this person and add to my watch list.\"><span class=\"watchLabel fs-icon-watch-off\"");_.b("\n" + i);_.b("        title=");_.b("\n" + i);_.b("        \"Be notified of updates to this person and add to my watch list.\">Watch</span>");_.b("\n" + i);_.b("        <span class=\"unwatchLabel fs-icon-watch-on\" title=");_.b("\n" + i);_.b("        \"Stop being notified of updates to this person and remove from my watch list.\">");_.b("\n" + i);_.b("        Unwatch</span> <span class=\"unavailableLabel fs-icon-watch-disabled\"");_.b("\n" + i);_.b("        title=\"Service is temporarily unavailable.\">Watch</span></a>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("\n" + i);_.b("    <table class=\"eventTable\">");_.b("\n" + i);_.b("      <tbody>");_.b("\n" + i);_.b("        <tr class=\"event birth\">");_.b("\n" + i);_.b("          <th>Birth</th>");_.b("\n" + i);_.b("\n" + i);_.b("          <td>");_.b("\n" + i);_.b("            <div class=\"date ellipses-text\" title=");_.b("\n" + i);_.b("            \"Standard: ");_.b(_.v(_.f("birthDate",c,p,0)));_.b("\">");_.b("\n" + i);_.b("              ");_.b(_.v(_.f("birthDate",c,p,0)));_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("\n" + i);_.b("            <div class=\"ellipses-text\">");_.b("\n" + i);_.b("              <div class=\"place\" title=");_.b("\n" + i);_.b("              \"Standard: ");_.b(_.v(_.f("birthPlace",c,p,0)));_.b("s\">");_.b("\n" + i);_.b("                ");_.b(_.v(_.f("birthPlace",c,p,0)));_.b("\n" + i);_.b("              </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </td>");_.b("\n" + i);_.b("        </tr>");_.b("\n" + i);_.b("\n" + i);_.b("        <tr class=\"event death\">");_.b("\n" + i);_.b("          <th>Death</th>");_.b("\n" + i);_.b("          <td>");_.b("\n" + i);_.b("            <div class=\"date ellipses-text\" title=\"Standard: ");_.b(_.v(_.f("deathDate",c,p,0)));_.b("\">");_.b("\n" + i);_.b("              ");_.b(_.v(_.f("deathDate",c,p,0)));_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("\n" + i);_.b("            <div class=\"ellipses-text\">");_.b("\n" + i);_.b("              <div class=\"place\" title=\"");_.b(_.v(_.f("deathPlace",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                ");_.b(_.v(_.f("deathPlace",c,p,0)));_.b("\n" + i);_.b("              </div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </td>");_.b("\n" + i);_.b("        </tr>");_.b("\n" + i);_.b("      </tbody>");_.b("\n" + i);_.b("\n" + i);_.b("      <tbody class=\"engageStatus hide\">");_.b("\n" + i);_.b("        <tr>");_.b("\n" + i);_.b("          <th></th>");_.b("\n" + i);_.b("\n" + i);_.b("          <td class=\"sections\" colspan=\"2\">");_.b("\n" + i);_.b("            <ul class=\"clearfix\">");_.b("\n" + i);_.b("              <li class=\"sources-label\"><a href=");_.b("\n" + i);_.b("              \"https://sandbox.familysearch.org/tree/#view=ancestor&amp;person=KW7S-V72&amp;section=sources\"");_.b("\n" + i);_.b("              onclick=");_.b("\n" + i);_.b("              \"FS.trackLink(true, FS.LINK_TYPES.PERSON_CARD_SOURCES_CLICK);\"><span>");_.b("\n" + i);_.b("              0</span>Sources</a></li>");_.b("\n" + i);_.b("\n" + i);_.b("              <li class=\"discussions-label\"><a href=");_.b("\n" + i);_.b("              \"https://sandbox.familysearch.org/tree/#view=ancestor&amp;person=KW7S-V72&amp;section=discussions\"");_.b("\n" + i);_.b("              onclick=");_.b("\n" + i);_.b("              \"FS.trackLink(true, FS.LINK_TYPES.PERSON_CARD_DISCUSSIONS_CLICK);\">");_.b("\n" + i);_.b("              <span>0</span>Discussions</a></li>");_.b("\n" + i);_.b("\n" + i);_.b("              <li class=\"memories-label\"><a href=");_.b("\n" + i);_.b("              \"https://sandbox.familysearch.org/tree/#view=ancestor&amp;person=KW7S-V72&amp;section=memories\"");_.b("\n" + i);_.b("              onclick=");_.b("\n" + i);_.b("              \"FS.trackLink(true, FS.LINK_TYPES.PERSON_CARD_MEMORIES_CLICK);\">");_.b("\n" + i);_.b("              <span>0</span>Memories</a></li>");_.b("\n" + i);_.b("\n" + i);_.b("              <li class=\"photos-label\"><a href=");_.b("\n" + i);_.b("              \"https://sandbox.familysearch.org/tree/#view=ancestor&amp;person=KW7S-V72&amp;section=photos\"");_.b("\n" + i);_.b("              onclick=");_.b("\n" + i);_.b("              \"FS.trackLink(true, FS.LINK_TYPES.PERSON_CARD_PHOTOS_CLICK);\"><span>");_.b("\n" + i);_.b("              0</span>Photos</a></li>");_.b("\n" + i);_.b("\n" + i);_.b("              <li class=\"stories-label\"><a href=");_.b("\n" + i);_.b("              \"https://sandbox.familysearch.org/tree/#view=ancestor&amp;person=KW7S-V72&amp;section=stories\"");_.b("\n" + i);_.b("              onclick=");_.b("\n" + i);_.b("              \"FS.trackLink(true, FS.LINK_TYPES.PERSON_CARD_STORIES_CLICK);\"><span>");_.b("\n" + i);_.b("              0</span>Stories</a></li>");_.b("\n" + i);_.b("            </ul>");_.b("\n" + i);_.b("          </td>");_.b("\n" + i);_.b("        </tr>");_.b("\n" + i);_.b("\n" + i);_.b("        <tr class=\"ordRow\" style=\"display: table-row; display: none;\">");_.b("\n" + i);_.b("          <th>Temple</th>");_.b("\n" + i);_.b("\n" + i);_.b("          <td class=\"engageOrds\" style=\"display: none;\">");_.b("\n" + i);_.b("          <!--spans below are put on a single line to avoid extra white in some browers-->");_.b("\n" + i);_.b("          <span class=\"ordIcons\"><span class=\"ordIcon Invalid\" title=\"\">B</span><span class=\"ordIcon Invalid\"");_.b("\n" + i);_.b("          title=\"\">C</span><span class=\"ordIcon Invalid\"");_.b("\n" + i);_.b("          title=\"\">I</span><span class=\"ordIcon Invalid\"");_.b("\n" + i);_.b("          title=\"\">E</span><span class=\"ordIcon Invalid\"");_.b("\n" + i);_.b("          title=\"\">SP</span><span class=");_.b("\n" + i);_.b("          \"ordIcon Invalid\" title=");_.b("\n" + i);_.b("          \"\">SS</span></span></td>");_.b("\n" + i);_.b("        </tr>");_.b("\n" + i);_.b("      </tbody>");_.b("\n" + i);_.b("    </table>");_.b("\n" + i);_.b("\n" + i);_.b("    <table class=\"statusTable\" style=\"display:none\">");_.b("\n" + i);_.b("      <tbody>");_.b("\n" + i);_.b("        <tr class=\"status ordRow\" style=");_.b("\n" + i);_.b("        \"display: table-row;\">");_.b("\n" + i);_.b("          <th><span>Ordinances</span></th>");_.b("\n" + i);_.b("\n" + i);_.b("          <td><span class=\"age\"></span> ");_.b("\n" + i);_.b("          <!--spans below are put on a single line to avoid extra white in some browers-->");_.b("\n" + i);_.b("           <span class=\"ordIcons\"><span class=");_.b("\n" + i);_.b("          \"ordIcon Invalid\" title=");_.b("\n" + i);_.b("          \"\">B</span><span class=\"ordIcon Invalid\"");_.b("\n" + i);_.b("          title=\"\">C</span><span class=\"ordIcon Invalid\"");_.b("\n" + i);_.b("          title=\"\">I</span><span class=\"ordIcon Invalid\"");_.b("\n" + i);_.b("          title=\"\">E</span><span class=\"ordIcon Invalid\" title=\"\">SP</span><span class=\"ordIcon Invalid\"");_.b("\n" + i);_.b("          title=\"\">SS</span></span></td>");_.b("\n" + i);_.b("        </tr>");_.b("\n" + i);_.b("      </tbody>");_.b("\n" + i);_.b("    </table>");_.b("\n" + i);_.b("\n" + i);_.b("    <div class=\"deleted-baner hide\">");_.b("\n" + i);_.b("      PERSON DELETED");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("\n" + i);_.b("  <div class=\"buttonBarBG\"></div>");_.b("\n" + i);_.b("\n" + i);_.b("  <div class=\"actionBar\">");_.b("\n" + i);_.b("    <a class=\"fs-icon-pedigree tree hide widgetAction\" href=\"#\" data-pid=\"");_.b(_.v(_.f("id",c,p,0)));_.b("\" data-type=\"pedigree\">Tree</a>");_.b("\n" + i);_.b("    <a class=\"details widgetAction\" href=\"#\" data-pid=\"");_.b(_.v(_.f("id",c,p,0)));_.b("\" data-type=\"person\"><i class=\"fs-icon-");_.b(_.v(_.f("gender",c,p,0)));_.b("\">&nbsp;</i>Person</a>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
this["SumoWidgets"]["source.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");if(_.s(_.f("sources",c,p,1),c,p,0,12,2657,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <div class=\"panel-group\" id=\"source-");_.b(_.v(_.f("sourceId",c,p,0)));_.b("\">");_.b("\n" + i);_.b("    <div class=\"panel panel-default source-objects\">");_.b("\n" + i);_.b("      <div class=\"panel-heading\">");_.b("\n" + i);_.b("        <table style=\"width: 100%;\">");_.b("\n" + i);_.b("          <tr>");_.b("\n" + i);_.b("            <td>");_.b("\n" + i);_.b("              <h4 class=\"panel-title source-title\">");_.b("\n" + i);if(_.s(_.f("url",c,p,1),c,p,0,300,562,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                    <a data-parent=\"#source-");_.b(_.v(_.f("sourceId",c,p,0)));_.b("\" data-toggle=\"collapse\" href=\"#");_.b(_.v(_.f("sourceId",c,p,0)));_.b("\"><img src=\"http://api.webthumbnail.org?width=64&height=64&url=");_.b(_.v(_.f("url",c,p,0)));_.b("\" width=\"64\" height=\"64\" alt=\"Google\" class=\"img-circle\" />");_.b(_.v(_.f("title",c,p,0)));_.b("</a>");_.b("\n");});c.pop();}if(!_.s(_.f("url",c,p,1),c,p,1,0,0,"")){_.b("                    <a data-parent=\"#source-");_.b(_.v(_.f("sourceId",c,p,0)));_.b("\" data-toggle=\"collapse\" href=\"#");_.b(_.v(_.f("sourceId",c,p,0)));_.b("\"><i class=\"fa fa-archive\">&nbsp;</i>");_.b(_.v(_.f("title",c,p,0)));_.b("</a>");_.b("\n");};_.b("              </h4>            ");_.b("\n" + i);_.b("            </td>");_.b("\n" + i);_.b("              <td style=\"width: 35%;\">");_.b("\n" + i);_.b("                <h4 class=\"panel-title source-title\">");_.b("\n" + i);_.b("                  ");if(_.s(_.f("tags",c,p,1),c,p,0,946,1067,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<a data-parent=\"#source-");_.b(_.v(_.f("sourceId",c,p,0)));_.b("\" data-toggle=\"collapse\" href=\"#");_.b(_.v(_.f("sourceId",c,p,0)));_.b("\"><span class=\"badge\">");_.b(_.v(_.f("tag",c,p,0)));_.b("</span></a> ");});c.pop();}_.b("\n" + i);_.b("                </h4>");_.b("\n" + i);_.b("              </td>");_.b("\n" + i);_.b("          </tr>");_.b("\n" + i);_.b("        </table>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("      <div class=\"panel-collapse collapse\" id=\"");_.b(_.v(_.f("sourceId",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        <div class=\"panel-body\">");_.b("\n" + i);_.b("          <div class=\"row\">");_.b("\n" + i);_.b("            <div class=\"col-md-3 col-md-offset-1\">");_.b("\n" + i);_.b("              <strong>URL</strong>:");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"col-md-7\">");_.b("\n" + i);_.b("              <a href=\"");_.b(_.v(_.f("url",c,p,0)));_.b("\" rel=\"external\">");_.b(_.v(_.f("url",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("          <div class=\"row\">");_.b("\n" + i);_.b("            <div class=\"col-md-3 col-md-offset-1\">");_.b("\n" + i);_.b("              <strong>Citation</strong>:");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"col-md-7\">");_.b("\n" + i);_.b("              ");_.b(_.v(_.f("citation",c,p,0)));_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("          <div class=\"row\">");_.b("\n" + i);_.b("            <div class=\"col-md-3 col-md-offset-1\">");_.b("\n" + i);_.b("              <strong>Notes</strong>:");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"col-md-7\">");_.b("\n" + i);_.b("              ");_.b(_.v(_.f("note",c,p,0)));_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("          <div class=\"row\">");_.b("\n" + i);_.b("            <div class=\"col-md-3 col-md-offset-1\">");_.b("\n" + i);_.b("              <strong>Reason Source is Attached</strong>:");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"col-md-7\">");_.b("\n" + i);_.b("              ");_.b(_.v(_.f("justification",c,p,0)));_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("          <div class=\"row\">");_.b("\n" + i);_.b("            <div class=\"col-md-3 col-md-offset-1\">");_.b("\n" + i);_.b("              <strong>Last Modified</strong>:");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"col-md-7\">");_.b("\n" + i);_.b("              <abbr class=\"timeago\" title=\"");_.b(_.v(_.f("modified",c,p,0)));_.b("\">");_.b(_.v(_.f("modified",c,p,0)));_.b("</abbr> by <a href=\"#");_.b(_.v(_.f("contributor",c,p,0)));_.b("&type=contributor\">");_.b(_.v(_.f("contributor",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("          </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n");});c.pop();}return _.fl();;});
this["SumoWidgets"]["sourcesContainer.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class='row'>");_.b("\n" + i);_.b("  <div class=\"col-lg-12\">");_.b("\n" + i);_.b("    <div class=\"page-header\">");_.b("\n" + i);_.b("      <h2 id=\"grid\">Sources</h2>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <div class=\"panel panel-primary source-panel\">");_.b("\n" + i);_.b("      <div class=\"panel-heading\">");_.b("\n" + i);_.b("        <div class=\"options\">");_.b("\n" + i);_.b("          <a class=\"panel-collapse\" href=\"javascript:;\"></a>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <h4 class=\"panel-title\">Sources</h4>");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("      <div class=\"panel-body source-objects\">");_.b("\n" + i);_.b("        Loading...");_.b("\n" + i);_.b("      </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("  </div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
this["SumoWidgets"]["test.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("This is a test.<br /> ");_.b(_.v(_.f("dovyTest",c,p,0)));return _.fl();;});
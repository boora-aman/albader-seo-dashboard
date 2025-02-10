"use client"

import { Calendar, AlertTriangle, Globe, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SEODashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <h1 className="text-xl font-bold">Al Bader LLC - SEO & SMM Audit Report</h1>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              10th February 2025
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="technical">Technical SEO</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="plan">Action Plan</TabsTrigger>
            <TabsTrigger value="onsite">On-Site Details</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Site Score</CardTitle>
                  <div className="h-4 w-4 text-yellow-500">⭐</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68/100</div>
                  <p className="text-xs text-muted-foreground">Very Good</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Critical Issues</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Needs immediate attention</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Mobile Score</CardTitle>
                  <div className="h-4 w-4 text-red-500">📱</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">53/100</div>
                  <p className="text-xs text-muted-foreground">Critical improvements needed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Desktop Score</CardTitle>
                  <div className="h-4 w-4 text-green-500">💻</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85/100</div>
                  <p className="text-xs text-muted-foreground">Good performance</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Tools Used in Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">SEO Tools</h4>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>SEMrush - Comprehensive SEO analysis</li>
                        <li>The HOTH - Website grading and recommendations</li>
                        <li>Ahrefs - Backlink analysis</li>
                        <li>Google Search Console - Performance monitoring</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Performance Tools</h4>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>Google PageSpeed Insights - Speed analysis</li>
                        <li>GTmetrix - Performance testing</li>
                        <li>Mobile-Friendly Test - Responsive design check</li>
                        <li>Chrome DevTools - Technical analysis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>SWOT Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Strengths</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>Strong desktop performance (85/100)</li>
                        <li>Good technical foundation</li>
                        <li>Clean URL structure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-1">Weaknesses</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>Poor mobile performance (53/100)</li>
                        <li>Missing meta descriptions</li>
                        <li>Thin content (197 words)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-1">Opportunities</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>Content expansion potential</li>
                        <li>Social media presence development</li>
                        <li>Local SEO optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-600 mb-1">Threats</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>Competitive market position</li>
                        <li>Technical debt accumulation</li>
                        <li>Search algorithm changes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Key Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <h4 className="font-medium">Technical Optimization</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Implement WebP images (1.95s savings)</li>
                      <li>Optimize render-blocking resources (1.74s savings)</li>
                      <li>Improve server response time (0.78s savings)</li>
                      <li>Fix redirect chains (0.63s savings)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Content Enhancement</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Expand content beyond current 197 words</li>
                      <li>Add meta descriptions to all pages</li>
                      <li>Implement proper H1 tags</li>
                      <li>Optimize image alt texts</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Social & Local SEO</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Create social media profiles</li>
                      <li>Optimize Google Business Profile</li>
                      <li>Generate more customer reviews</li>
                      <li>Build local citations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Server Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Server Response Time:</span>
                      <span className="font-medium">0.210 seconds</span>
                    </div>
                    <div className="flex justify-between">
                      <span>HTTP Protocol:</span>
                      <span className="font-medium text-green-600">HTTP/2+ (Good)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SSL Status:</span>
                      <span className="font-medium text-green-600">Properly Implemented</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hosting:</span>
                      <span className="font-medium">LiteSpeed server</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Page Speed Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="mobile">
                      <AccordionTrigger>Mobile Performance (53/100)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>First Contentful Paint:</span>
                            <span className="font-medium text-red-500">3.0s</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Speed Index:</span>
                            <span className="font-medium text-red-500">12.9s</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Largest Contentful Paint:</span>
                            <span className="font-medium text-red-500">9.7s</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Time to Interactive:</span>
                            <span className="font-medium text-red-500">10.0s</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="desktop">
                      <AccordionTrigger>Desktop Performance (85/100)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>First Contentful Paint:</span>
                            <span className="font-medium text-green-600">0.9s</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Speed Index:</span>
                            <span className="font-medium text-yellow-500">2.8s</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Largest Contentful Paint:</span>
                            <span className="font-medium text-green-600">1.7s</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Time to Interactive:</span>
                            <span className="font-medium text-green-600">2.0s</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Elements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      <span>URL Structure: Needs Improvement</span>
                    </div>
                    <div className="flex items-center">
                      <FileCode className="h-4 w-4 mr-2" />
                      <span>Robots.txt: Present</span>
                    </div>
                    <div className="flex items-center">
                      <FileCode className="h-4 w-4 mr-2" />
                      <span>XML Sitemap: Present</span>
                    </div>
                    <div className="flex items-center text-red-500">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>DMARC: Missing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Technical Optimization Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Issue</TableHead>
                      <TableHead>Impact</TableHead>
                      <TableHead>Recommendation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Image Format</TableCell>
                      <TableCell>1.95s savings</TableCell>
                      <TableCell>Implement WebP images</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Render Blocking Resources</TableCell>
                      <TableCell>1.74s savings</TableCell>
                      <TableCell>Defer non-critical CSS/JS</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Server Response Time</TableCell>
                      <TableCell>0.78s savings</TableCell>
                      <TableCell>Optimize server-side caching</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Redirect Chains</TableCell>
                      <TableCell>0.63s savings</TableCell>
                      <TableCell>Implement direct redirects</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Content Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total Word Count:</span>
                      <span className="font-medium text-red-500">197 (Thin Content)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pages Analyzed:</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Content Quality:</span>
                      <span className="font-medium text-yellow-500">Needs Improvement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Keyword Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead>Frequency</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>interiors</TableCell>
                        <TableCell>7</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>design</TableCell>
                        <TableCell>7</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>bader</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>interior</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Meta Data Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-red-500">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>Missing meta descriptions</span>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>Title tag too short (19 characters)</span>
                    </div>
                    <div className="flex items-center text-red-500">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>Missing H1 tags</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Content Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">1. Expand Core Pages</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Develop comprehensive service pages (500+ words each)</li>
                      <li>Create detailed About Us page showcasing company history and expertise</li>
                      <li>Build out Portfolio section with case studies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">2. Implement Blog Strategy</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Publish 2-4 high-quality blog posts per month (1000+ words each)</li>
                      <li>Focus on industry insights, design trends, and expert advice</li>
                      <li>Incorporate relevant keywords naturally</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">3. Optimize Existing Content</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Rewrite homepage content to be more engaging and keyword-rich</li>
                      <li>Implement proper header structure (H1, H2, H3)</li>
                      <li>Add alt text to all images</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plan" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>6-Month Action Plan</CardTitle>
                <CardDescription>February 2025 - July 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="month1">
                    <AccordionTrigger>Month 1: Technical Foundation (February 2025)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Week 1-2: Technical SEO</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Implement server-side caching</li>
                            <li>Configure browser caching</li>
                            <li>Enable GZIP compression</li>
                            <li>Optimize database</li>
                            <li>Implement WebP images</li>
                            <li>Configure lazy loading</li>
                            <li>Minify CSS/JS</li>
                            <li>Remove render-blocking resources</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Week 3-4: On-Page Optimization</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Write meta descriptions for all pages</li>
                            <li>Optimize title tags with keywords</li>
                            <li>Implement H1 tags across all pages</li>
                            <li>Fix image alt tags</li>
                            <li>Implement clean URL structure</li>
                            <li>Create redirect map for old URLs</li>
                            <li>Audit and optimize canonical tags</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="month2">
                    <AccordionTrigger>Month 2: Content Development (March 2025)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Week 1-2: Content Strategy</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Conduct comprehensive keyword research</li>
                            <li>Develop content calendar for next 3 months</li>
                            <li>Create topic clusters for main service areas</li>
                            <li>Plan content types (blog posts, case studies, infographics)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Week 3-4: Content Creation</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Rewrite and expand homepage content</li>
                            <li>Develop 5 core service pages (500+ words each)</li>
                            <li>Create detailed About Us page</li>
                            <li>Write 2 in-depth blog posts</li>
                            <li>Develop 1 case study showcasing a successful project</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="month3">
                    <AccordionTrigger>Month 3: Social Media Development (April 2025)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Week 1-2: Profile Setup</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Create business profiles on Facebook, Instagram, LinkedIn, and X</li>
                            <li>Optimize profile information and branding</li>
                            <li>Design custom graphics for each platform</li>
                            <li>Develop social media guidelines and voice</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Week 3-4: Content Strategy</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Create social media content calendar</li>
                            <li>Develop platform-specific content strategies</li>
                            <li>Plan engagement and community management tactics</li>
                            <li>Set up social media monitoring tools</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="month4">
                    <AccordionTrigger>Month 4: Local SEO Focus (May 2025)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Week 1-2: Google Business Profile</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Fully optimize Google Business Profile</li>
                            <li>Add high-quality photos and videos</li>
                            <li>Create Google Posts schedule</li>
                            <li>Implement review generation strategy</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Week 3-4: Local Citations</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Audit existing citations for NAP consistency</li>
                            <li>Create listings on top local directories</li>
                            <li>Develop location-specific content</li>
                            <li>Implement local schema markup</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="month5">
                    <AccordionTrigger>Month 5: Link Building (June 2025)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Week 1-2: Strategy Development</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Conduct competitor backlink analysis</li>
                            <li>Identify industry-specific link opportunities</li>
                            <li>Develop linkable assets (infographics, studies)</li>
                            <li>Create outreach templates</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Week 3-4: Outreach and Acquisition</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Begin outreach to identified prospects</li>
                            <li>Pursue guest posting opportunities</li>
                            <li>Engage in industry forums and discussions</li>
                            <li>Monitor and track link acquisition progress</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="month6">
                    <AccordionTrigger>Month 6: Analysis & Optimization (July 2025)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Week 1-2: Performance Analysis</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Conduct comprehensive SEO audit</li>
                            <li>Analyze ranking changes and traffic growth</li>
                            <li>Review conversion rates and user behavior</li>
                            <li>Assess social media engagement and growth</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Week 3-4: Strategy Refinement</h4>
                          <ul className="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li>Identify areas for improvement</li>
                            <li>Update keyword strategy based on performance</li>
                            <li>Refine content and link building approaches</li>
                            <li>Develop action plan for next 6 months</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="onsite" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Meta Tags Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Title Tags</h4>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 border rounded">
                          <p className="font-medium">Homepage</p>
                          <p className="text-red-500">Current: "Home - Al Bader LLC" (19 chars)</p>
                          <p className="text-green-600">
                            Recommended: "Al Bader Interiors LLC | Premium Interior Design Dubai | Since 1990"
                          </p>
                        </div>
                        <div className="p-2 border rounded">
                          <p className="font-medium">Services Page</p>
                          <p className="text-red-500">Current: Missing</p>
                          <p className="text-green-600">
                            Recommended: "Interior Design & Fit Out Services Dubai | Al Bader Interiors"
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Meta Descriptions</h4>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 border rounded">
                          <p className="font-medium">Homepage</p>
                          <p className="text-red-500">Current: Missing</p>
                          <p className="text-green-600">
                            Recommended: "Transform your space with Al Bader Interiors LLC, Dubai's leading interior
                            design and fit-out company. 25+ years of excellence in commercial & residential projects.
                            ✓Premium Quality ✓Custom Solutions"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Header Tags Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-2 border rounded">
                      <h4 className="font-medium mb-2">Current Structure</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-red-500">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          <span>Missing H1 Tag</span>
                        </div>
                        <p className="font-medium">H2 Tags (4):</p>
                        <ul className="list-disc pl-4">
                          <li>AL BADER INTERIORS LLC</li>
                          <li>Latest Project</li>
                          <li>About</li>
                          <li>Get In Touch</li>
                        </ul>
                        <p className="font-medium">H3 Tags (2)</p>
                      </div>
                    </div>
                    <div className="p-2 border rounded">
                      <h4 className="font-medium mb-2">Recommended Structure</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>Add H1: "Premium Interior Design & Fit Out Services in Dubai"</li>
                        <li>Restructure H2s for better keyword targeting</li>
                        <li>Include service-specific H3s</li>
                        <li>Maintain proper heading hierarchy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Image Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Current Status</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Total Images:</span>
                          <span>21</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                          <span>Missing Alt Tags:</span>
                          <span>1</span>
                        </div>
                        <div className="flex justify-between text-yellow-500">
                          <span>Unoptimized Format:</span>
                          <span>14</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                          <span>Large File Size:</span>
                          <span>8</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Recommendations</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>Convert images to WebP format</li>
                        <li>Implement responsive images</li>
                        <li>Add descriptive alt tags</li>
                        <li>Enable lazy loading</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Page-Specific Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Page</TableHead>
                      <TableHead>Issues</TableHead>
                      <TableHead>Word Count</TableHead>
                      <TableHead>Priority</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Homepage</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4 text-sm">
                          <li>Missing meta description</li>
                          <li>Short title tag</li>
                          <li>No H1 tag</li>
                        </ul>
                      </TableCell>
                      <TableCell>197</TableCell>
                      <TableCell>
                        <span className="text-red-500">High</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Services</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4 text-sm">
                          <li>Thin content</li>
                          <li>Missing meta tags</li>
                        </ul>
                      </TableCell>
                      <TableCell>145</TableCell>
                      <TableCell>
                        <span className="text-red-500">High</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>About</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-4 text-sm">
                          <li>No schema markup</li>
                          <li>Missing alt tags</li>
                        </ul>
                      </TableCell>
                      <TableCell>280</TableCell>
                      <TableCell>
                        <span className="text-yellow-500">Medium</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Presence</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Current Status</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-red-500">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          <span>No Facebook Business Page</span>
                        </div>
                        <div className="flex items-center text-red-500">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          <span>No Instagram Business Account</span>
                        </div>
                        <div className="flex items-center text-red-500">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          <span>No LinkedIn Company Page</span>
                        </div>
                        <div className="flex items-center text-red-500">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          <span>No X Profile</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Implementation Priority</h4>
                      <ol className="list-decimal pl-4 text-sm space-y-1">
                        <li>Instagram Business Account</li>
                        <li>LinkedIn Company Page</li>
                        <li>Facebook Business Page</li>
                        <li>X Profile</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Content Types</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>Project showcases & before/after</li>
                        <li>Design tips & inspiration</li>
                        <li>Team highlights</li>
                        <li>Client testimonials</li>
                        <li>Behind-the-scenes content</li>
                        <li>Industry news & trends</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Posting Schedule</h4>
                      <div className="space-y-2 text-sm">
                        <p>Instagram: 4-5 posts/week</p>
                        <p>LinkedIn: 2-3 posts/week</p>
                        <p>Facebook: 3-4 posts/week</p>
                        <p>X: 3-5 posts/week</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engagement Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Growth Tactics</h4>
                      <ul className="list-disc pl-4 text-sm space-y-1">
                        <li>Hashtag research & implementation</li>
                        <li>Influencer collaborations</li>
                        <li>Employee advocacy program</li>
                        <li>Social media contests</li>
                        <li>User-generated content campaigns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Time Goals</h4>
                      <div className="space-y-2 text-sm">
                        <p>Comments: Within 2 hours</p>
                        <p>Direct Messages: Within 4 hours</p>
                        <p>Reviews: Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Social Media Implementation Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Phase 1: Setup & Branding (Weeks 1-2)</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Create business profiles on all platforms</li>
                      <li>Design consistent profile images and cover photos</li>
                      <li>Develop brand voice and content guidelines</li>
                      <li>Set up social media management tools</li>
                      <li>Create content calendar template</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Phase 2: Content Creation (Weeks 3-4)</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Professional photoshoot of completed projects</li>
                      <li>Create video content showcasing services</li>
                      <li>Develop educational content series</li>
                      <li>Design social media templates</li>
                      <li>Write engaging captions and CTAs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Phase 3: Growth & Engagement (Weeks 5-8)</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Implement hashtag strategy</li>
                      <li>Launch first social media campaign</li>
                      <li>Begin influencer outreach</li>
                      <li>Set up social listening tools</li>
                      <li>Start community engagement initiatives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Phase 4: Optimization (Weeks 9-12)</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Analyze performance metrics</li>
                      <li>Adjust posting schedule based on data</li>
                      <li>Refine content strategy</li>
                      <li>Scale successful campaigns</li>
                      <li>Implement paid social strategy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Media Advertising Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">Campaign Objectives</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Brand Awareness</li>
                      <li>Website Traffic</li>
                      <li>Lead Generation</li>
                      <li>Engagement</li>
                      <li>Remarketing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Ad Types</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Instagram Stories & Reels</li>
                      <li>Facebook Carousel Ads</li>
                      <li>LinkedIn Sponsored Content</li>
                      <li>Remarketing Display Ads</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Target Audience</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Location: Dubai and surrounding areas</li>
                      <li>Age: 28-55</li>
                      <li>Interests: Interior Design, Luxury Homes</li>
                      <li>Income: High</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Budget Allocation</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Instagram: 40%</li>
                      <li>Facebook: 30%</li>
                      <li>LinkedIn: 20%</li>
                      <li>X: 10%</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


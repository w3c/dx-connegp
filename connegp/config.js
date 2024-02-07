var respecConfig = {
    group: "dx",
    specStatus: "ED",
    shortName: "dx-prof-conneg",
    edDraftURI: "https://w3c.github.io/dx-connegp/connegp/",
    previousPublishDate: "2019-04-30",
    previousMaturity: "WD",
    testSuiteURI: "https://github.com/w3c/prof-conneg-testing",
    implementationReportURI: "https://w3c.github.io/dx-connegp/connegp-implementation-report/",
    canonicalURI: "TR",
    editors: [{
        name:       "Lars G. Svensson",
        company:    "Invited Expert and before at Deutsche Nationalbibliothek",
        orcid:      "0000-0002-8714-9718",
        w3cid:      44603
      },
      {
        name:       "Rob Atkinson",
        company:    "Metalinkage, Open Geospatial Consortium",
        companyURL: "http://www.ogc.org",
        orcid:      "0000-0002-7878-2693",
        w3cid:      90763
      },
      {
        name:       "Nicholas J. Car",
        mailto:     "nick@kurrawong.ai",
        company:    "KurrawongAI, previously SURROUND Australia and before CSIRO",
        companyURL: "https://kurrawong.ai",
        orcid:      "0000-0002-8742-7730",
        w3cid:      70131
    },
    {
        name: "Yousouf Taghzouti",
        mailto: "yousouf.taghzouti@emse.fr",
        company: "Mines Saint-Étienne, Institut Mines-Télécom",
        companyURL: "https://www.mines-stetienne.fr/",
        orcid: "0000-0003-4509-9537",
        w3cid: 143054
    }],
    otherLinks: [{
    	key: "Contributors",
	    data: [{
            value: "Ruben Verborgh",
            href:  "https://ruben.verborgh.org/"
    	}]
    }],
    wgPublicList: "public-dxwg-comments",
    inlineCSS: "true",
    lint: "false",
    maxTocLevel: 3,
    issueBase: "https://github.com/w3c/dx-connegp/issues/",
    github: "https://github.com/w3c/dx-connegp/",
    localBiblio: {
        "ARK" : {
           editors: [
               "J. Kunze",
               "R. Rodgers"
            ],
            href: "https://datatracker.ietf.org/doc/draft-kunze-ark/37/",
            title: "The ARK Identifier Scheme" ,
            date: "2023-04-25",
            status: "Internet-Draft"
        },
        "PROF-GUIDANCE": {
            editors: [
                "Rob Atkinson",
                "Karen Coyle",
                "Antoine Isaac",
                "Nicholas J. Car"
            ],
            href: "https://w3c.github.io/dxwg/profiles/",
            title: "Profile Guidance",
            date: " 2019-04-24",
            status: "W3C Editor's Draft"
        },
        "PROF-IETF": {
            authors: [
                "L. Svensson",
                "R. Verborgh",
                "H. Van de Sompel"
            ],
            href: "https://datatracker.ietf.org/doc/draft-svensson-profiled-representations/01/",
            title: "Indicating, Discovering, Negotiating, and Writing Profiled Representations",
            date: " 2021-03-09",
            status: "IETF Internet Draft"
        }
    }
};

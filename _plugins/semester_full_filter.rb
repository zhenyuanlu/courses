module Jekyll
    module SemesterFullFilter
      def semester_full(abbreviation)
        seasons = { 'sp' => 'Spring', 'su' => 'Summer', 'fa' => 'Fall' }
        season_code = abbreviation[0..1]
        year = '20' + abbreviation[4..5]
        season = seasons[season_code.downcase] || 'Unknown'
        "#{season} #{year}"
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::SemesterFullFilter)
  
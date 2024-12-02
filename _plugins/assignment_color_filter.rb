module Jekyll
  module AssignmentColorFilter
    def assignment_color(type)
      colors = {
        'homework' => 'text-blue-600',
        'project' => 'text-purple-600',
        'exam' => 'text-orange-600'
      }
      colors[type] || 'text-gray-600'
    end

    def assignment_color_bg(type)
      colors = {
        'homework' => 'bg-blue-100 text-blue-800',
        'project' => 'bg-purple-100 text-purple-800',
        'exam' => 'bg-orange-100 text-orange-800'
      }
      colors[type] || 'bg-gray-100 text-gray-800'
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssignmentColorFilter)

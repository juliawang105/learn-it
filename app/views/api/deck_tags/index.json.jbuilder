 @deck_tags.each do |deck_tag|
        json.set! deck_tag.id do 
            json.extract! deck_tag, :id, :tag_id, :deck_id, :tag
        end
    end
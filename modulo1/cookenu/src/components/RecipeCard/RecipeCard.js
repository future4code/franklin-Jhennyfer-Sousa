import React from 'react'
import { RecipeCardContainer, CardActionArea, CardMedia, RecipeCardContent, TitleCard} from './styledRecipeCard'

export const RecipeCard = (props) => {

    return (
        <RecipeCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    alt={props.title}
                    src={props.image}
                    title={props.title}
                />
                <RecipeCardContent>
                    <TitleCard>
                        {props.title}
                    </TitleCard>
                </RecipeCardContent>
            </CardActionArea>
        </RecipeCardContainer>


    )}


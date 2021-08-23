package org.aadi.redditDemo.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.aadi.redditDemo.dto.CommunityDto;
import org.aadi.redditDemo.exceptions.SpringRedditException;
import org.aadi.redditDemo.mapper.CommunityMapper;
import org.aadi.redditDemo.model.Community;
import org.aadi.redditDemo.repository.CommunityRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final CommunityMapper communityMapper;

    @Transactional
    public CommunityDto save(CommunityDto communityDto) {
    	log.info("Inside save method of SubredditService Class");
        Community save = communityRepository.save(communityMapper.mapDtoToCommunity(communityDto));
        communityDto.setId(save.getId());
        return communityDto;
    }

    @Transactional(readOnly = true)
    public List<CommunityDto> getAll() {
        return communityRepository.findAll()
                .stream()
                .map(communityMapper::mapCommunityToDto)
                .collect(toList());
    }

    public CommunityDto getCommunity(Long id) {
        Community community = communityRepository.findById(id)
                .orElseThrow(() -> new SpringRedditException("No community found with ID - " + id));
        return communityMapper.mapCommunityToDto(community);
    }
}

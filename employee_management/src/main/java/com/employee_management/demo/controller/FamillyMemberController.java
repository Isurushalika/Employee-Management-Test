package com.employee_management.demo.controller;

import com.employee_management.demo.exception.ResourceNotFoundException;
import com.employee_management.demo.model.FamillyMember;
import com.employee_management.demo.repository.FamillyMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class FamillyMemberController {
    @Autowired
    private FamillyMemberRepository famillyMemberRepository;

    @GetMapping("/famillymembers")
    public List<FamillyMember> getAllFamillyMembers() {
        return famillyMemberRepository.findAll();
    }

    @GetMapping("/famillymembers/{id}")
    public ResponseEntity<FamillyMember> getFamillyMemberById(@PathVariable(value = "id") Long famillyMemberId)
            throws ResourceNotFoundException {
        FamillyMember famillyMember = famillyMemberRepository.findById(famillyMemberId)
                .orElseThrow(() -> new ResourceNotFoundException("FamillyMember not found for this id :: " + famillyMemberId));
        return ResponseEntity.ok().body(famillyMember);
    }

    @PostMapping("/famillymembers")
    public FamillyMember createFamillyMember(@Valid @RequestBody FamillyMember famillyMember) {
        return famillyMemberRepository.save(famillyMember);
    }

    @PutMapping("/famillymembers/{id}")
    public ResponseEntity<FamillyMember> updateFamillyMember(@PathVariable(value = "id") Long famillyMemberId,
                                                   @Valid @RequestBody FamillyMember famillyMemberDetails) throws ResourceNotFoundException {
        FamillyMember famillyMember = famillyMemberRepository.findById(famillyMemberId)
                .orElseThrow(() -> new ResourceNotFoundException("FamillyMember not found for this id :: " + famillyMemberId));

        famillyMember.setEmailId(famillyMemberDetails.getEmailId());
        famillyMember.setLastName(famillyMemberDetails.getLastName());
        famillyMember.setFirstName(famillyMemberDetails.getFirstName());
        final FamillyMember updateFamillyMember = famillyMemberRepository.save(famillyMember);
        return ResponseEntity.ok(updateFamillyMember);
    }

    @DeleteMapping("/famillymembers/{id}")
    public Map<String, Boolean> deleteFamillyMember(@PathVariable(value = "id") Long famillyMemberId)
            throws ResourceNotFoundException {
        FamillyMember famillyMember = famillyMemberRepository.findById(famillyMemberId)
                .orElseThrow(() -> new ResourceNotFoundException("FamillyMember not found for this id :: " + famillyMemberId));

        famillyMemberRepository.delete(famillyMember);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

